(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(59)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),o=a(2),i=a.n(o),u=a(22),l=a(3),p=a(4),h=a(7),m=a(6),d=a(5),f=a(8),y=a(23),b=a.n(y),k=(a(57),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"cont"},r.a.createElement("img",{src:this.props.image,alt:"",width:"100px",height:"100px"})),r.a.createElement("div",{className:"texts"},r.a.createElement("h2",null,this.props.name.charAt(0).toUpperCase()+this.props.name.slice(1)),r.a.createElement("h3",{style:{border:function(){if(""===e.props.types)return"none"}(),backgroundColor:function(){switch(e.props.types){case"electric":return"#f8d030";case"fire":return"#f08030";case"normal":return"#a8a878";case"fighting":return"#c03028";case"flying":return"#a890f0";case"poison":return"#a040a0";case"ground":return"#e0c068";case"rock":return"#b8a038";case"bug":return"#a8b820";case"ghost":return"#705898";case"steel":return"#b8b8d0";case"water":return"#6890f0";case"grass":return"#78c850";case"psychic":return"#f85888";case"ice":return"#98d8d8";case"dragon":return"#7038f8";case"dark":return"#705848";default:return"none"}}()}},this.props.types.toUpperCase()),r.a.createElement("h4",null,this.props.text)))}}]),t}(n.Component)),v=(a(58),new b.a),x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).state={name:"",url:"",term:"",text:"",type:""},e.keypressed=function(t){"Enter"===t.key&&e.handlePokedex()},e.handlePokedex=e.handlePokedex.bind(Object(d.a)(e)),e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handlePokedex",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getPokemonByName(this.state.term.toLowerCase());case 2:return t=e.sent,e.next=5,v.getPokemonSpeciesByName(this.state.term.toLowerCase());case 5:a=e.sent,console.log(t),""!==this.state.term?(this.setState({name:t.name}),this.setState({url:t.sprites.front_default}),this.setState({text:a.flavor_text_entries[2].flavor_text}),this.setState({type:t.types[0].type.name})):alert("Please enter a valid Pokemon name");case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"containers",style:this.styles},r.a.createElement(k,{name:this.state.name,image:this.state.url,text:this.state.text,types:this.state.type}),r.a.createElement("input",{type:"text",placeholder:"Enter Pokemon name..",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})},onKeyPress:this.keypressed}),r.a.createElement("button",{className:"btn",onClick:this.handlePokedex})))}}]),t}(n.Component);c.a.render(r.a.createElement(x,null),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8d63ff51.chunk.js.map