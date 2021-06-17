function el(type,attrs,children){
    const div = document.createElement(type);
    for(let key in attrs) {
        div.setAttribute(key, attrs[key]);
      };
    if(typeof children == 'string'){
        div.innerHTML = children;
    }else if(children == null){
        children = "";
    }
    else if(children.length){
        children.forEach((e) =>{
            div.appendChild(e);
        })
    }else if(typeof children == 'object') {
        div.appendChild(children);
    }
    
    return div;
};



const tree =
  el("div", {"class": "some_classname", "id": "some_id"},
    el("span", {}, 'hello')
  );
 

  const tree2 =
  el("div", {},
    el("ul", {}, [
      el("li", {}, "Item 1"),
      el("li", {}, "Item 2"),
      el("li", {}, "Item 3")
    ])
  );

  const tree3 =
  el("form", {action: '/some_action'}, [
    el("label", {for: 'name'}, "First name:"),
    el("br", {}, null),
    el("input", {type: 'text', id: 'name', name: 'name', value: "My name"}, null),
    el("br", {}, null),
    el("label", {for: 'last_name'}, "Last name:"),
    el("br", {}, null),
    el("input", {type: 'text', id: 'last_name', name: 'last_name', value: "My second name"}, null),
    el("br", {}, null),
    el("input", {type: 'submit', value: "submit"}, null),
  ]);

  console.log(tree)
  console.log(tree2)
  console.log(tree3)
 
  document.getElementById("root").appendChild(tree3);
