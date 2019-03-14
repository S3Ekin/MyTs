// 确保是模块
export {};

declare global {
  interface String {
    endsWith(suffix: string): boolean;

  }

  interface Window{
  	sekin:string;
  }
}

String.prototype.endsWith = function(suffix: string): boolean {
  const str: string = this;
  return str && str.indexOf(suffix, str.length - suffix.length) !== -1 || false;
};

console.log('foo bar'.endsWith('bas')); // false
console.log('foo bas'.endsWith('bas')); // true