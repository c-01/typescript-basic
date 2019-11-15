let nyName : string = 'this is name';
let number : number = 1;
let flag : boolean = true;
let anything : any;

// array
let lists : string[] = ['1', '22q','s']; // number[], boolean[], any[]

// using for function
let fn_debug : void;

enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
// using enum
let _red = Color.Red; // red



let _null : null;
let _undefined : undefined;

// TypeAssertion
let books : string[];
// => books. show all method

// Cast
let noType;
let arrTypes = (<string[]>noType).push();
// or
arrTypes = (noType as string[]).push();