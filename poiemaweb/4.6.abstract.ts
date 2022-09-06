abstract class Languages {
  abstract runEnvironment(): void;

  write(): void {
    console.log('Developer are developing');
  }
}

// new Languages();
// 추상 클래스는 직접 인스턴스를 생성할 수 없다.
// TS2511: Cannot create an instance of an abstract class. or
// TS2511: Cannot create an instance of the abstract class 'Languages'.


class Javascript extends Languages {
  runEnvironment() {
    console.log('on Browser and Nodejs');
  }
}

const js = new Javascript();
js.write(); // Developer are developing
js.runEnvironment(); // on Browser and Nodejs

