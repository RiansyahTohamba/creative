kenapa-harus-arrow.md

3. 'this.setState()' is not a function 
We must avoid the 'this' keyword context from being replaced by the function.
Jadi masalah yang timbul adalah this.setState tidak dianggap function?
apa hubungannya statement this.setState dengan arrow-function ?
wkwkw

We can declare the function using JavaScript arrow function '()=>{} '.
So, we have to change the declaration of function 'clickHandler() {}' to become 'clickHandler = () => {}'
Furthermore, we have to access 'clicks' through the 'state' reference.
Then we change the incremental statements from 'this.clicks' become 'this.state.clicks'.

mari kita lihat contoh pada soal:

# sebelum
```
clickHandler() {
	this.setState({
	  clicks: this.clicks + 1
	});
}
```

# sesudah
```
clickHandler = () => {
	this.setState({ clicks: this.state.clicks + 1});   
}

```
clickHandler dapat diganti namanya.
clickHandler bukanlah method milik React.Component.
clickHandler harus menggunakan arrow function.
Mengganti 
clickHandler(){}

menjadi 
clickHandler = () => {}

untuk menghindari context. 

apa maksudnya?

ada penjelasan ini

You have to be careful about the meaning of this in JSX callbacks. 
In JavaScript, class methods are not bound by default. 
If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

saya masih belum jelas dengan arrow ini.