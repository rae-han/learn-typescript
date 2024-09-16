const log = console.log;
const lg = (key) => log(`\x1b[31m#### #### \x1b[34m${key} \x1b[31m#### #### \x1b[0m`);
class Word {
    term;
    def;
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
class Dict {
    words;
    constructor() {
        this.words = {};
    }
    // # add: 단어를 추가
    add(word) {
        if (!this.exists(word.term)) {
            this.words[word.term] = word.def;
        }
    }
    // # get: 단어의 정의를 리턴함.
    get(term) {
        return this.words[term] || 'Not Found';
    }
    // # delete: 단어를 삭제함.
    delete(term) {
        delete this.words[term];
    }
    // # update: 단어를 업데이트 함.
    update(term, def) {
        if (this.exists(term)) {
            this.words[term] = def;
        }
        else {
            return 'Not Found';
        }
    }
    // # showAll: 사전 단어를 모두 보여줌.
    showAll() {
        const words = Object.keys(this.words).sort().join(' ');
        log(words);
        return words;
    }
    // # count: 사전 단어들의 총 갯수를 리턴함.
    count() {
        return Object.entries(this.words).length;
    }
    // # upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
    upsert(term, def) {
        if (this.exists(term)) {
            this.update(term, def);
        }
        else {
            this.add(new Word(term, def));
        }
    }
    // # exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
    exists(term) {
        return this.words[term] !== undefined ? true : false;
    }
    // # bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
    bulkAdd(data) {
        for (const { term, definition } of Object.values(data)) {
            if (!this.exists(term)) {
                this.add(new Word(term, definition));
            }
        }
    }
    // # bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
    bulkDelete(data) {
        data.forEach((term) => this.delete(term));
    }
}
const dic = new Dict();
lg(`Add`);
['a', 'b', 'c', 'x', 'y', 'z', 'hh'].forEach((value) => dic.add(new Word(value, value.repeat(4))));
log(dic);
lg(`Get`);
log(dic.get('a'));
log(dic.get('d'));
lg(`Delete`);
dic.delete('c');
dic.delete('z');
log(dic);
lg(`Update`);
dic.update('a', 'abcd');
dic.update('x', 'XXXX');
log(dic);
lg('Show All');
dic.showAll();
lg('Count');
log(dic.count());
lg('Upsert');
dic.upsert('z', 'zzzz');
dic.upsert('b', 'BeeBee');
log(dic);
lg(`exists`);
log(dic.exists('a'));
log(dic.exists('x'));
log(dic.exists('z'));
lg('bulkAdd');
dic.bulkAdd([
    { term: '김치', definition: '대박이네~' },
    { term: '아파트', definition: '비싸네~' },
]);
log(dic);
lg('bulkDelete');
dic.bulkDelete(['김치', '아파트', 'y']);
log(dic);
export {};
