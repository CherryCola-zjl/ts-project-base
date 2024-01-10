interface ConfigOptions {
  id: string;
  url: string;
}
class libraryStarter {
  id: number;

  constructor(options: ConfigOptions) {
    this.id = 11;
    this.url = options.url;
    console.log('constructor-id-url', options.id, options.url, 123123);
  }

  say() {
    console.log(this.id);
  }
}

export default libraryStarter;
