# Create a Button, How and When

When to use a button tag
- Buttons within a `<form>` have functionality without JS, otherwise use Button with features rely on JS. Which means outside a form,
if there's no JS involved, we should not use <button> to create something looks like a button. In this case, use `<a>` tag is a 
good choice. **Do not use `<div>` to create buttons**.
- In the form, the differece between button and input tag is that button element can have content. 
- Always specify the type attribute for a button element. 
- Outside a form, if the `<a>` tag doesn't make sense, use a `<button>` instead.


Styling a button
- Give it a class.
- Set up display : block (vertical display buttons) or inline-block (buttons in a line).
- Set up the shape : width, padding, margin, border.
- Set up the color : background, color.
- Set up the content : font, text-align.
- Add hover effect : usuallychange the background and color of it.
```css
.button{
  display : block;
  width : 200px;
  padding:10px;
  border: none;
  margin: 10px auto;
  
  background : #dd0a0a;
  color: #e6e6e6;
  
  font-size:12px;
  text-align : center;
}
.button : hover{
  background: #2fdd3c;
  color:#fff;
}
```

