In this we have discussed what is ejs template engine in express and how to use it.

Installing ejs :-
npm install ejs

To use also include :-
app.set('view engine', 'ejs')

views folder will be created to make .ejs files

To change name of an element using variables passing to ejs - syntax is :-
<%= variable_name %>
this will return the value inside the variable...
If normally written variable name then it will not return value in the variable.

To include components like navbar, footer, some buttons in short the components which are used in all the pages of the website.
Make seperate pages like navbar.ejs, footer,ejs etc and write its code there and to include these on pages.. use this 

Syntax ->
    <%- include('page_name',);%>

and if you wish to change variable or their values here then use this extended version of the same syntax ->
    <%- include('page_name', {variable_name: "Changes_made");%>  


