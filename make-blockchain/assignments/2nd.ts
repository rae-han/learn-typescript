const log = console.log;

interface Words {
  [key: string]: string;
}

class Word {
  constructor(public term: string, public def: string) {}
}

class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
}

const dic = new Dict();

dic.add(new Word('a', 'aaaa'));
dic.add(new Word('b', 'bbbb'));
dic.add(new Word('c', 'cccc'));
dic.add(new Word('z', 'zzzz'));

console.log(dic);

export {};
