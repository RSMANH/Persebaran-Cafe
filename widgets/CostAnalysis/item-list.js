// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/item-list.html":'\x3cdiv\x3e\r\n  \x3cdiv class \x3d "esriCTItemListContainer" data-dojo-attach-point\x3d"itemListContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./item-list.html dojo/_base/array dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-style dojo/on dojo/query dojo/dom-construct dojo/keys dojo/_base/event".split(" "),function(p,q,r,t,u,v,h,b,g,l,m,k,e,n,w){return p([q,r,t],{templateString:u,baseClass:"jimu-widget-cost-analysis-item-list",highlighterColor:"#000",currentActivePanel:null,postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);
this.itemList&&0<this.itemList.length&&setTimeout(h.hitch(this,function(){this._loadItemList();this._handleTabIndexesOfItems()}),0)},_handleTabIndexesOfItems:function(){this.emit("OnOpenCreatePanel");this.emit("OnCloseLoadPanel");this.emit("OnCloseUpdateCostEquationPanel")},_loadItemList:function(){v.forEach(this.itemList,h.hitch(this,function(a){this.addItem(a)}))},addItem:function(a){var d,c,f;a.content=a.content||"";f=e.create("div",{},null);c=e.create("div",{"class":"esriCTItemTitleContainer",
tabindex:"0","aria-label":a.title,role:"button"},f);g.add(c,"esriCTProjectOveriew");e.create("div",{"class":"esriCTItemHighlighter"},c);d=e.create("div",{"class":"esriCTItemTitle esriCTEllipsis",innerHTML:a.title,title:a.title,paneName:a.paneName},c);a.hasOwnProperty("updateCostEquationWidget")&&b.set(d,"updateCostEquationWidget",!0);a.hasOwnProperty("loadProjectTab")&&b.set(d,"loadProjectTab",!0);a.hasOwnProperty("createProjectTab")&&b.set(d,"createProjectTab",!0);d=e.create("div",{"class":"esriCTItemContent"},
f);"string"===typeof a.content?b.set(d,"innerHTML",a.content):e.place(a.content,d);this.itemListContainer.appendChild(f);this.own(m(c,"click",h.hitch(this,function(a){this._itemTitleContainerClicked(a)})));this.own(m(c,"keydown",h.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)w.stop(a),this._itemTitleContainerClicked(a)})));a.isOpen&&this._togglePanel(f,!0)},_itemTitleContainerClicked:function(a){this._togglePanel(a.currentTarget.parentElement);a.currentTarget.children.length&&
b.get(a.currentTarget.children[1],"loadProjectTab")&&(this.emit("resetLoadProjectNameDropdown"),a.currentTarget.children.length&&g.contains(a.currentTarget.children[1],"esriCTItemTitleActive")?(b.set(a.currentTarget,"aria-expanded","true"),this.emit("OnCloseCreatePanel"),this.emit("OnOpenLoadPanel")):(b.set(a.currentTarget,"aria-expanded","false"),this.emit("OnCloseLoadPanel")));a.currentTarget.children.length&&b.get(a.currentTarget.children[1],"updateCostEquationWidget")&&(this.emit("refreshUpdateCostEquationWidget"),
a.currentTarget.children.length&&g.contains(a.currentTarget.children[1],"esriCTItemTitleActive")?(this.emit("OnCloseCreatePanel"),this.emit("OnCloseLoadPanel"),b.set(a.currentTarget,"aria-expanded","true")):b.set(a.currentTarget,"aria-expanded","false"));a.currentTarget.children.length&&b.get(a.currentTarget.children[1],"createProjectTab")&&(a.currentTarget.children.length&&g.contains(a.currentTarget.children[1],"esriCTItemTitleActive")?(this.emit("OnOpenCreatePanel"),this.emit("OnCloseLoadPanel"),
b.set(a.currentTarget,"aria-expanded","true")):(this.emit("OnCloseCreatePanel"),b.set(a.currentTarget,"aria-expanded","false")))},_togglePanel:function(a,d){var c,f=0,e;d||(f=30);d=k(".esriCTItemTitle",a)[0];c=k(".esriCTItemContent",a)[0];e=k(".esriCTItemHighlighter",a)[0];g.toggle(d,"esriCTItemTitleActive");g.toggle(c,"esriCTItemContentActive");g.contains(c,"esriCTItemContentActive")?(c.style.height=c.scrollHeight+f+"px",this.currentActivePanel&&!this.openMultiple&&this._togglePanel(this.currentActivePanel,
!0),this.currentActivePanel=a,l.set(e,"backgroundColor",this.highlighterColor)):(c.style.height=0,l.set(e,"backgroundColor","transparent"),b.get(this.currentActivePanel,"index")===b.get(a,"index")&&(this.currentActivePanel=null))}})});