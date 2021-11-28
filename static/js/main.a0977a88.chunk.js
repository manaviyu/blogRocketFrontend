(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,s){},31:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var c=s(1),o=s.n(c),n=s(27),a=s.n(n),i=(s(31),s(6)),r=s(7),l=s(9),h=s(8),b=(s.p,s(11),s(5)),j=s(2),d=s(15),u=s(10),p=s.n(u),m=s(0),O=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).onChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var s={title:e.state.title,isbn:e.state.isbn,author:e.state.author,description:e.state.description,published_date:e.state.published_date,publisher:e.state.publisher};p.a.post("http://localhost:8888/api/book",s).then((function(t){e.setState({title:"",isbn:"",author:"",description:"",published_date:"",publisher:""}),e.props.history.push("/")})).catch((function(e){return console.log("Error in Creating a book.")}))},e.state={title:"",isbn:"",author:"",description:"",published_date:"",publisher:""},e}return Object(r.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"CreateBook",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(m.jsx)("br",{}),Object(m.jsx)(b.b,{to:"/",className:"btn btn-outline-warning float-left",children:"Show BooK List"})]}),Object(m.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(m.jsx)("h1",{className:"display-4 text-center",children:"Add Book"}),Object(m.jsx)("p",{className:"lead text-center",children:"Create new book"}),Object(m.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"Title of the Book",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"ISBN",name:"isbn",className:"form-control",value:this.state.isbn,onChange:this.onChange})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"Describe this book",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"date",placeholder:"published_date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"Publisher of this Book",name:"publisher",className:"form-control",value:this.state.publisher,onChange:this.onChange})}),Object(m.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]})]})]})})})}}]),s}(c.Component),x=function(e){var t=e.book;return Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsx)("img",{src:"https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3",alt:""}),Object(m.jsxs)("div",{className:"desc",children:[Object(m.jsx)("h2",{children:Object(m.jsx)(b.b,{to:"/show-book/".concat(t._id),children:t.title})}),Object(m.jsx)("h3",{children:t.author}),Object(m.jsx)("p",{children:t.description})]})]})},f=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={books:[]},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://localhost/api/book/").then((function(t){console.log(t),e.setState({books:t.data})})).catch((function(e){return console.log("Error from Show Book List")}))}},{key:"render",value:function(){var e,t=this.state.books;return console.log("PrintBook: "+t),e=t?t.map((function(e,t){return Object(m.jsx)(x,{book:e},t)})):"there is no book record!",Object(m.jsx)("div",{className:"ShowBookList",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("br",{}),Object(m.jsx)("h2",{className:"display-4 text-center",children:"Books List"})]}),Object(m.jsxs)("div",{className:"col-md-11",children:[Object(m.jsx)(b.b,{to:"/create-book",className:"btn btn-outline-warning float-right",children:"+ Add New Book"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{})]})]}),Object(m.jsx)("div",{className:"list",children:e})]})})}}]),s}(c.Component),v=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={book:{}},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://localhost:8888/api/book/"+this.props.match.params.id).then((function(t){e.setState({book:t.data})})).catch((function(e){return console.log("Error in Show Book Details.")}))}},{key:"onDeleteClick",value:function(e){var t=this;p.a.delete("https://localhost/api/book/"+e).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log("Error from Show Book Details Delete Click.")}))}},{key:"render",value:function(){var e=this.state.book,t=Object(m.jsx)("div",{children:Object(m.jsx)("table",{className:"table table-hover table-dark",children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:"1"}),Object(m.jsx)("td",{children:"Title"}),Object(m.jsx)("td",{children:e.title})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:"2"}),Object(m.jsx)("td",{children:"Author"}),Object(m.jsx)("td",{children:e.author})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:"3"}),Object(m.jsx)("td",{children:"ISBN"}),Object(m.jsx)("td",{children:e.isbn})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:"4"}),Object(m.jsx)("td",{children:"Publisher"}),Object(m.jsx)("td",{children:e.publisher})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:"5"}),Object(m.jsx)("td",{children:"Published Date"}),Object(m.jsx)("td",{children:e.published_date})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:"6"}),Object(m.jsx)("td",{children:"Description"}),Object(m.jsx)("td",{children:e.description})]})]})})});return Object(m.jsx)("div",{className:"ShowBookDetails",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-10 m-auto",children:[Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{}),Object(m.jsx)(b.b,{to:"/",className:"btn btn-outline-warning float-left",children:"Show Book List"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(m.jsx)("h1",{className:"display-4 text-center",children:"Book's Record"}),Object(m.jsx)("p",{className:"lead text-center",children:"View Book's Info"}),Object(m.jsx)("hr",{})," ",Object(m.jsx)("br",{})]})]}),Object(m.jsx)("div",{children:t}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-lg btn-block",onClick:this.onDeleteClick.bind(this,e._id),children:"Delete Book"}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)(b.b,{to:"/edit-book/".concat(e._id),className:"btn btn-outline-info btn-lg btn-block",children:"Edit Book"}),Object(m.jsx)("br",{})]})]})]})})}}]),s}(c.Component),k=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).onChange=function(e){c.setState(Object(d.a)({},e.target.name,e.target.value))},c.onSubmit=function(e){e.preventDefault();var t={title:c.state.title,isbn:c.state.isbn,author:c.state.author,description:c.state.description,published_date:c.state.published_date,publisher:c.state.publisher};p.a.put("https://localhost:8888/api/book"+c.props.match.params.id,t).then((function(e){c.props.history.push("/show-book/"+c.props.match.params.id)})).catch((function(e){return console.log("Error in Update Book Info in put method.")}))},c.state={title:"",isbn:"",author:"",description:"",published_date:"",publisher:""},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://localhost:8888/api/book"+this.props.match.params.id).then((function(t){e.setState({title:t.data.title,isbn:t.data.isbn,author:t.data.author,description:t.data.description,published_date:t.data.published_date,publisher:t.data.publisher})})).catch((function(e){return console.log("Error in Update Book Info")}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"UpdateBookInfo",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(m.jsx)("br",{}),Object(m.jsx)(b.b,{to:"/",className:"btn btn-outline-warning float-left",children:"Show BooK List"})]}),Object(m.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(m.jsx)("h1",{className:"display-4 text-center",children:"Edit Book"}),Object(m.jsx)("p",{className:"lead text-center",children:"Update Book's Info"})]})]}),Object(m.jsx)("div",{className:"col-md-8 m-auto",children:Object(m.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title"}),Object(m.jsx)("input",{type:"text",placeholder:"Title of the Book",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"isbn",children:"ISBN"}),Object(m.jsx)("input",{type:"text",placeholder:"ISBN",name:"isbn",className:"form-control",value:this.state.isbn,onChange:this.onChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"author",children:"Author"}),Object(m.jsx)("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"description",children:"Description"}),Object(m.jsx)("input",{type:"text",placeholder:"Describe this book",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"published_date",children:"Published Date"}),Object(m.jsx)("input",{type:"date",placeholder:"published_date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"publisher",children:"Publisher"}),Object(m.jsx)("input",{type:"text",placeholder:"Publisher of this Book",name:"publisher",className:"form-control",value:this.state.publisher,onChange:this.onChange})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-info btn-lg btn-block",children:"Update Book"})]})})]})})}}]),s}(c.Component),g=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(m.jsx)(b.a,{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",element:Object(m.jsx)(f,{})}),Object(m.jsx)(j.a,{path:"create-book",element:Object(m.jsx)(O,{})}),Object(m.jsx)(j.a,{path:"edit-book/:id",element:Object(m.jsx)(k,{})}),Object(m.jsx)(j.a,{path:"show-book/:id",element:Object(m.jsx)(v,{})})]})})}}]),s}(s(18).Component),N=g,C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(t){var s=t.getCLS,c=t.getFID,o=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),o(e),n(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),C()}},[[51,1,2]]]);
//# sourceMappingURL=main.a0977a88.chunk.js.map