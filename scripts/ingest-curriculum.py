#!/usr/bin/env python3
"""
Parlez Weekly Curriculum Ingestion Script
Extracts vocabulary, phrases, and grammar points from new classroom PowerPoint/PDF slide decks
and formats them as visual-first flashcards for Parlez.
"""

import os
import sys
import argparse
import io
import re
import PyPDF2

# Ensure UTF-8 output on Windows consoles
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def extract_pdf_lines(file_path):
    if not os.path.exists(file_path):
        print(f"Error: File not found: {file_path}")
        sys.exit(1)

    reader = PyPDF2.PdfReader(file_path)
    total_pages = len(reader.pages)
    print(f"Reading {os.path.basename(file_path)} ({total_pages} pages)...")

    lines = []
    for page_idx, page in enumerate(reader.pages):
        text = page.extract_text()
        if not text:
            continue
        for line in text.split('\n'):
            line = line.strip()
            # Filter out boilerplate headers/footers
            if len(line) < 3:
                continue
            if line.startswith('@mahsa') or 'Your Logo' in line:
                continue
            lines.append((page_idx + 1, line))
    return lines

def analyze_curriculum(lines, session_label="A1.2"):
    print(f"Extracted {len(lines)} content lines from slides.")
    
    # Common French patterns to detect
    vocab_candidates = []
    seen = set()

    # Pattern for articles + French nouns: un/une/le/la/les/l'
    noun_pattern = re.compile(r'\b(un|une|le|la|les|l’|l\')\s+([a-zA-ZÀ-ÿ\s-]+)', re.IGNORECASE)
    # Pattern for Je / J' verbs
    verb_pattern = re.compile(r'\b(je|j’|j\')\s+([a-zA-ZÀ-ÿ\s-]+)', re.IGNORECASE)

    for page_num, line in lines:
        for match in noun_pattern.finditer(line):
            phrase = match.group(0).strip()
            if len(phrase) > 3 and len(phrase) < 35 and phrase.lower() not in seen:
                seen.add(phrase.lower())
                vocab_candidates.append({
                    'page': page_num,
                    'type': 'vocab',
                    'french': phrase,
                    'context': line
                })

        for match in verb_pattern.finditer(line):
            phrase = match.group(0).strip()
            if len(phrase) > 5 and len(phrase) < 45 and phrase.lower() not in seen:
                seen.add(phrase.lower())
                vocab_candidates.append({
                    'page': page_num,
                    'type': 'action',
                    'french': phrase,
                    'context': line
                })

    print(f"\n--- Discovered {len(vocab_candidates)} Candidate Vocabulary/Action Items ---")
    for idx, item in enumerate(vocab_candidates[:25]):
        print(f"[{item['type'].upper()}] p.{item['page']}: {item['french']} (Context: {item['context'][:60]})")

    return vocab_candidates

def main():
    parser = argparse.ArgumentParser(description="Ingest weekly French slides for Parlez")
    parser.add_argument("--file", "-f", required=False, help="Path to slide PDF file in Sources/")
    parser.add_argument("--session", "-s", default="A1.2", help="Session label e.g. A1.2 Séances 7–8")
    args = parser.parse_args()

    target_file = args.file
    if not target_file:
        # Default to latest slide deck in Sources
        sources_dir = os.path.join(os.path.dirname(__file__), '..', 'Sources')
        candidates = [os.path.join(sources_dir, f) for f in os.listdir(sources_dir) if f.endswith('.pdf') and 'séance' in f.lower()]
        candidates.sort(key=os.path.getmtime, reverse=True)
        if candidates:
            target_file = candidates[0]
            print(f"No file specified. Using most recently modified slide: {os.path.basename(target_file)}")
        else:
            print("No PDF files found in Sources/")
            sys.exit(1)

    lines = extract_pdf_lines(target_file)
    candidates = analyze_curriculum(lines, session_label=args.session)
    print("\n✓ Slide ingestion analysis complete. Use candidate list to add new cards to cards-curriculum.js.")

if __name__ == '__main__':
    main()
