# another app for planning like todo apps with more features

i've made this project using html js and css but more in tailwindcss for styles

## first page

in front page you can see an empty column and a sidebar menu you can add
your plans using button in header

### display and organization

after clicking and Specify your plan it appears in main colmun with detail and options

## buttons on plan for customization

- 🚮**delete** for removing the plan
- 📄**page** for opening a page for that plan
- ⬆️**up** moving task box up
- ⬇️**down** moving task box up
- 🩵**heart** adding the title to favorite list

## after all page is important part

and one if its challenge was displaying the plan in the page

### local save for saving project

for this i use the local memory for saving th plan data in object then i'll get that object in the second page scripts file

```javascript
localStorage.setItem("plan", JSON.stringify(PlanObject)); //saving plan details as string
//-------------------------in page 2 👇
let PlanObject = JSON.parse(localStorage.getItem("plan")); //getting plan detail as object
```

and that was it easily data has sent from one page to another

## file adding for better planning

users can add file but only csv , txt will display there

```javascript
if (file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("fileContent").innerText = e.target.result;
  };
  reader.readAsText(file);
}
```
#### timer in page for users 
 other intersting feature in page was seting a deadline for the plan 
 very easy i'll get from user to start a count down 
 and a circle to see it in visual way 

## how to use this project 
first use git clone to get the main files 

> gh repo clone Amir-Bagheri-FE/schedule

 then you have to install tailwindcss beacuse package excluded 


