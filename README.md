# emoji_debug_js

have a fun while debugging

## Options

   ```javascript 
   // defaluts
   let config  =  {
	    fontsize: 50, 
       log:['😃',"👀","🙂"], // gets random from array
       worning:"😥",
       error:['😑','😱','😠'], // showing by level
       }
   let  c  = new  Emoji_debug(config)
   ```
    
## Usage
Creating object of Emoji_debug
```javascript
let c =	new  Emoji_debug();
```
Use log levels
  ```javascript
	  c.log('something');
  ```

  ```javascript
	  c.error('something');
  ```

  ```javascript
	  c.worn('something');
  ```

Group logs
  ```javascript
	c.g('Group name');
	    c.log('something');
	c.gEnd();
  ```

Collapsed group logs
  ```javascript
	c.gc('Group name');
	  c.log('something');
	c.gEnd();
  ```

	


