interface ConfigOptions {
  id: string;
  url: string;
}
class libraryStarter {
  constructor(options: ConfigOptions) {
    console.log('constructor-id-url', options.id, options.url, 123123);
  }
}

export default libraryStarter;
