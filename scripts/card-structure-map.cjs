const fs = require('fs');
const path = require('path');
const { NEW_GRAMMAR_STRUCTURES } = require('./new-grammar-structures.cjs');

// Mapping each grammar card ID to its structure ID
const CARD_STRUCTURE_MAP = {
  // Negation
  gr_negation_pas: 'negation',
  gr_negation_jamais: 'negation',
  gr_negation_plus: 'negation',
  gr_negation_rien: 'negation',
  
  // Prepositions (Country / City / Chez)
  gr_prep_countries: 'prepositions',
  gr_prep_cities: 'prepositions',
  gr_prep_chez: 'prepositions',
  
  // Verbs & Activities
  gr_aller_vs_prendre: 'aller_prendre',
  gr_jouer_a_vs_de: 'jouer_prep',
  
  // Tenses
  gr_trois_temps: 'trois_temps',
  
  // Verb Groups Conjugation
  gr_verbes_er: 'verbes_er',
  gr_verbes_ir_2e: 'verbes_ir_2e',
  gr_verbes_ir_3e: 'verbes_ir_3e',
  
  // Questions
  gr_questions_3formes: 'questions_3formes',
  
  // Housing & Prepositions
  gr_demenager_emmenager: 'demenager_emmenager',
  gr_prepositions_lieu_2: 'prepositions_lieu',
  
  // Passé Composé with AVOIR & Syntax
  gr_pc_avoir: 'avoir',
  gr_participes_passes: 'participes_passes',
  gr_pc_negation: 'passe_compose_syntax',
  gr_pc_adverbes: 'passe_compose_syntax',
  
  // Rules & Obligations
  gr_obligation_interdiction: 'rules',
  
  // Movement & Reflexives (Passé Composé ÊTRE)
  gr_pc_etre_maison: 'maison',
  gr_pc_pronominaux: 'reflexive',
  gr_se_faire_infinitif: 'se_faire',
  gr_ne_que_avant_de: 'neque',
  
  // Distinctions & Pronouns
  gr_connaitre_vs_savoir: 'connaitre_savoir',
  gr_pronoms_cod: 'cod_coi',
  gr_accord_cod_passe_compose: 'cod_coi',
  gr_pronoms_coi: 'cod_coi',
  gr_trouver_plaire: 'trouver_plaire'
};

console.log('Mapping defined for cards:', Object.keys(CARD_STRUCTURE_MAP).length);
module.exports = { CARD_STRUCTURE_MAP, NEW_GRAMMAR_STRUCTURES };
