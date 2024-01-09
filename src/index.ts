interface ConfigOptions {
  id: string;
  url: string;
}
class libraryStarter {
  constructor(options: ConfigOptions) {
    console.log('constructor-id-url', options.id, options.url, 123123);
  }
}

let a=1
let b= 2
let c=3;
export default libraryStarter;
