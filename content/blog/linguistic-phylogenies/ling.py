import nltk
import math
from collections import defaultdict
from copy import copy
import string
from nltk.corpus import stopwords, udhr
import json

class DocumentVector:

    def __init__(self, text, n=4):
        """
        Vector representation of a text document.
        """
        self.freqs = defaultdict(float)

        # preprocess text, remove punctuation, etc.
        text = text.lower()
        text = ''.join(c for c in text if c.isalpha() or c.isspace())
        text = ' '.join(text.split())

        J = len(text) - n + 1 # total number of n grams in text
        for i in range(J):
            ngram = text[i:i+n]
            self.freqs[ngram] += 1

        for ngram in self.freqs:
            self.freqs[ngram] /= J


    def normalize(self):
        """
        Normalizes the document vector (norm = 1).
        """
        mag = math.sqrt(sum(map(lambda x: x**2, self.freqs.values())))
        for ngram in self.freqs:
            self.freqs[ngram] /= mag


    @staticmethod
    def dot(v1, v2):
        """
        Returns the normalized dot product of two document vectors.
        """
        v1.normalize()
        v2.normalize()

        dot_product = 0.0
        for ngram in v1.freqs:
            dot_product += v1.freqs[ngram] * v2.freqs[ngram]

        return dot_product


    @staticmethod
    def angle(v1, v2):
        """
        Returns the angle, in radians, between two document vectors.
        """
        dot_product = DocumentVector.dot(v1, v2)
        return math.acos(dot_product)

langs = [
    'Afrikaans',
    'Albanian_Shqip',
    'Basque_Euskara',
    'Catalan_Catala',
    'Danish_Dansk',
    'Dutch_Nederlands',
    'English',
    'Estonian_Eesti',
    'Filipino_Tagalog',
    'Finnish_Suomi',
    'French_Francais',
    'German_Deutsch',
    'Hausa_Haoussa',
    'Hungarian_Magyar',
    'Icelandic_Yslenska',
    'Indonesian',
    'Italian_Italiano',
    'Javanese',
    'Kicongo',
    'Latin_Latina',
    'Latvian',
    'Luxembourgish_Letzebuergeusch',
    'Malay_BahasaMelayu',
    'Norwegian_Norsk-Bokmal',
    'Portuguese_Portugues',
    'Samoan',
    'ScottishGaelic_GaidhligAlbanach',
    'Spanish_Espanol',
    'Swahili_Kiswahili',
    'Swedish_Svenska',
    'Uzbek',
    'Welsh_Cymraeg',
    'Zulu'
]

def gen_sim_graph():
    nodes, links = [], []
    lang_vectors = {}
    for lang in langs:
        lang_vectors[lang+'-Latin1'] = DocumentVector(udhr.raw(lang+'-Latin1'))
        nodes.append({'id': lang, 'group': 0, 'native_speakers': 0})

    N = len(langs)
    for i in range(0, N - 1):
        source = langs[i]
        for j in range(i+1, N):
            target = langs[j]
            similarity = DocumentVector.dot(lang_vectors[source+'-Latin1'], lang_vectors[target+'-Latin1'])
            links.append({'source': source, 'target': target, 'similarity': similarity})


    data = {'nodes': nodes, 'links': links}

    with open('languages.json', 'w') as outfile:
        json.dump(data, outfile, indent=4)

def print_langs():
    for lang in udhr.fileids():
        if '-Latin1' in lang:
            print(lang)


gen_sim_graph()
