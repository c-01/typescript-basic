var nyName = 'this is name';
var number = 1;
var flag = true;
var anything;
// array
var lists = ['1', '22q', 's']; // number[], boolean[], any[]
// using for function
var fn_debug;
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
// using enum
var _red = Color.Red; // red
var _null;
var _undefined;
