interface ConfigOptions {
  id: string;
  url: string;
}
class libraryStarter {
  id: number;

  url: string;

  constructor(options: ConfigOptions) {
    this.id = 11;
    this.url = options.url;
  }
  /* eslint-disable class-methods-use-this */

  say() {
    return 'hello';
  }
}

export default libraryStarter;
