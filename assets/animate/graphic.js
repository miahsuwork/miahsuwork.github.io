(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.space = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spaceall
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07D28C").s().p("AqnCCIAAkDIVPAAIAAEDg");
	this.shape.setTransform(68,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.space, new cjs.Rectangle(0,0,136,26), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouthall
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113032").s().p("Ag7APQgZgUAAgdICpAAQAAAdgZAUQgZAUgjAAQgiAAgZgUg");
	this.shape.setTransform(8.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(0,0,17,7), null);


(lib.icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iconbg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C7986").s().p("AgOEmIhPhUIkHAAQgSAAgNgPQgMgPAAgUIAAmZQAAgVAMgPQANgOASAAILIAAQASAAANAOQANAPAAAVIAAGZQAAAUgNAPQgNAPgSAAIkHAAIhPBUQgFAGgJAAQgIAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon, new cjs.Rectangle(-40,-30,80,60.1), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handall
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNFsIAAhcQgXgVgBgaQgjh7hUhaIgBgBQgMgNgBgSQgBgSAMgPQANgPASgBQATAAAOAPIABABQAuAyAjA6IAAl2QAAgSAMgNQANgNATAAQATAAAMANQAMANAAASIAAACIAAAAIAADmQABgQAKgKQALgMARAAQARAAALAMQALALAAAQIAAAJQACgPALgKQALgKAPAAQARAAALALQAMALAAARIAAAOQAMgNARAAQASAAALAOQALAOgBAVIAAACQgKCRhBCCQgGAQgMAOIgIAHIAABJg");
	this.shape.setTransform(23.5,36.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(0,0,47,72.8), null);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyeqqq
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113032").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAUQAAAVgPAPQgPAOgUAAQgUAAgPgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.email = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mailqqq
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6201A").s().p("A/hW7Qg7AAgpgqQgqgpAAg7MAAAgpZQAAg7AqgpQApgqA7AAMA/DAAAQA7AAApAqQAqApAAA7MAAAApZQAAA7gqApQgpAqg7AAgAa7TcIxPwZIkiETQhDBAhXAhQhVAhhbAAQhaAAhVghQhXghhDhAIkjkTIwmQZMA1NAAAgA9oSEIRrxmIx1xlgAL0AoISdRSMAAAgjBgAiRETQA3AzBkgEQBkgEA3g1IY03QMg1XAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A+qVoQgtAAggghQghggAAguMAAAgnyQAAgtAhggQAgggAtgBMA9VAAAQAtABAgAgQAhAgAAAtMAAAAnyQAAAughAgQggAhgtAAg");
	this.shape_1.setTransform(-4.2,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.email, new cjs.Rectangle(-215.9,-146.6,432,293.4), null);


(lib.eyemove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyeall
	this.instance = new lib.eye();
	this.instance.parent = this;
	this.instance.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({scaleY:0.16},3).to({scaleY:1},2).wait(29).to({scaleY:0.16},2).to({scaleY:1},2).to({scaleY:0.13},2).to({scaleY:1},2).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,10,10);


(lib.iconAll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.eyemove();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-10,1,1,0,0,0,0,5);

	this.instance_1 = new lib.eyemove();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.5,-10,1,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// handers
	this.instance_2 = new lib.mouth();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,6.5,1,1,0,0,0,8.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// iconbgs
	this.instance_3 = new lib.icon();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.iconAll, new cjs.Rectangle(-40,-30,80,60.1), null);


// stage content:
(lib.graphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mail
	this.instance = new lib.email();
	this.instance.parent = this;
	this.instance.setTransform(165.4,128.3,0.099,0.099,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({y:124.1},13).to({y:128.3},11).to({regX:1,regY:0,scaleX:0.05,scaleY:0.06,skewX:27.4,x:176.4,y:121.8},21).to({regX:1.8,scaleX:0.03,scaleY:0.03,x:191.3,y:115},22).to({regX:2.8,scaleX:0.02,scaleY:0.02,skewX:39.5,x:203.8,y:107},11).to({regX:-108,regY:61.6,scaleX:0,scaleY:0,skewX:39.3,skewY:179,x:219.2,y:99.4},16).wait(1));

	// hand
	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,247.5,0.667,0.667,0,0,0,18.7,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:142},11).to({regY:9.3,rotation:-7.2,x:152.2,y:247.6},18).to({regX:18.8,rotation:-7,x:161.3,y:246.5},12).to({rotation:-7.7,x:157,y:247.5},21).to({regX:18.7,regY:9.2,rotation:0,x:146.3},14).to({rotation:7.2,x:145.8},9).to({rotation:0,x:153.2},8).to({x:150},5).to({scaleX:0.63,scaleY:0.63,x:149.4,y:247.2},4).to({scaleX:0.67,scaleY:0.67,x:150,y:247.5},3).wait(15));

	// space
	this.instance_2 = new lib.space();
	this.instance_2.parent = this;
	this.instance_2.setTransform(165.5,238.9,0.667,0.667,0,0,0,68,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98).to({regY:13.2,scaleX:0.64,scaleY:0.64,y:240},4).to({regY:13.1,scaleX:0.67,scaleY:0.67,y:238.9},3).wait(15));

	// icon
	this.instance_3 = new lib.iconAll();
	this.instance_3.parent = this;
	this.instance_3.setTransform(165.4,40,0.667,0.667,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({y:34.7},17).to({y:40},23).wait(18).to({y:32},20).to({y:40},14).wait(10));

	// !
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEA+IgDgDIgDgDIgBgFIABgEIADgEQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAEgBIAFABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIADAEIABAEIgBAFIgDADIgDADIgFABIgEgBgAgGAcIgChaIARAAIgCBag");
	this.shape.setTransform(93.3,125.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(43).to({_off:false},0).wait(59).to({_off:true},1).wait(17));

	// o
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRArQgHgDgGgGQgFgFgDgJQgDgIAAgLQAAgKADgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAKAAAHADQAIADAEAGQAGAGACAIQADAJAAAKQAAAKgDAIQgCAJgGAGQgFAGgIADQgIAEgJAAQgKAAgHgDgAgLgdQgEADgDAEQgEAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAGACQAEACAFAAQAHAAAFgDQAEgCAEgFQADgEABgGIACgNQAAgHgCgGQgCgGgDgEQgEgEgEgCQgFgDgGAAQgGAAgFADg");
	this.shape_1.setTransform(83.5,127.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(38).to({_off:false},0).to({_off:true},57).wait(25));

	// l
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA+IAAgMIAcAAIAAhiIgaAAIAAgNIApAAIAABvIAbAAIAAAMg");
	this.shape_2.setTransform(73.7,125.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(32).to({_off:false},0).to({_off:true},56).wait(32));

	// l
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA+IAAgMIAcAAIAAhiIgaAAIAAgNIApAAIAABvIAbAAIAAAMg");
	this.shape_3.setTransform(63.8,125.8);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(26).to({_off:false},0).to({_off:true},55).wait(39));

	// e
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOArQgJgDgFgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAFgGAHgEQAIgEAIAAQAJAAAHADQAIADAEAGQAFAFADAIQACAHAAAJIAAAFIgBAEIg8AAQAAAOAIAHQAHAHANAAIAIAAIAHgBIAIgBIAGgCIAAANIgPADIgQABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgDgEQgEgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_4.setTransform(53.8,127.6);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(20).to({_off:false},0).to({_off:true},54).wait(46));

	// h
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA+IAAg4QAAgJgDgGQgFgEgHAAIgFAAIgFADIgGAGIgIAIIAAA6IgPAAIAAh7IAPAAIAAAkIgBAOIAHgIIAIgEIAGgDIAHgBQANAAAIAIQAGAJABAPIAAA5g");
	this.shape_5.setTransform(43.9,125.8);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(14).to({_off:false},0).to({_off:true},53).wait(53));

	// hellobg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAchSIq4AAIAAmAIMfAAIAAGAgAHxEyIAAgLICsAAIAACsIisAAgAIyFsQAAAAABgBQAGgGAKAAQAKAAAGAGQAIAHAAAKQAAAKgIAGQgGAHgKAAQgKAAgGgHQgHgGAAgKQAAgIAEgGQABgBABgBIAQAPIgSgNAIyFsIhBg6InVmE");
	this.shape_6.setTransform(94.7,153.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAQQgGgGAAgKQAAgHAEgGIACgCIAQAPIgSgNIASANIgQgPIAAgBQAHgGAJAAQAKAAAGAGQAHAHAAAJQAAAKgHAGQgGAHgKAAQgJAAgHgHg");
	this.shape_7.setTransform(152.6,191.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(120));

	// notebook
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#07D28C").s().p("AqnCCIAAkDIVPAAIAAEDg");
	this.shape_8.setTransform(165.4,238.8,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_9.setTransform(226.7,238.8,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_10.setTransform(226.7,215.4,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_11.setTransform(202.1,215.4,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_12.setTransform(177.6,215.4,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_13.setTransform(153.1,215.4,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_14.setTransform(128.5,215.4,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_15.setTransform(104,238.8,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_16.setTransform(104,215.4,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_17.setTransform(226.7,192.1,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_18.setTransform(202.1,192.1,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_19.setTransform(177.6,192.1,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_20.setTransform(153.1,192.1,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_21.setTransform(128.5,192.1,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8D8D8D").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_22.setTransform(104,192.1,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8D8D8D").s().p("AwtIwIAAxfMAhbAAAIAARfg");
	this.shape_23.setTransform(165.3,124.1,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5F5F5F").s().p("AzGKNQgoAAgdgdQgdgdAAgoIAAxVQAAgpAdgcQAdgcAoAAMAmNAAAQAoAAAdAcQAdAcAAApIAARVQAAAogdAdQgdAdgoAAg");
	this.shape_24.setTransform(165.3,212.9,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5F5F5F").s().p("AzALYQgrgBgegeQgfgeAAgrIAAzfQAAgrAfgeQAegfArAAMAmBAAAQArAAAeAfQAfAeAAArIAATfQAAArgfAeQgeAegrABg");
	this.shape_25.setTransform(165.3,122.9,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_26.setTransform(128.5,215.4,0.667,0.667);

	this.instance_4 = new lib.space();
	this.instance_4.parent = this;
	this.instance_4.setTransform(165.5,238.9,0.667,0.667,0,0,0,68,13.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiCCDIAAkFIEGAAIAAEFg");
	this.shape_27.setTransform(226.7,238.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:128.5}},{t:this.shape_20,p:{x:153.1}},{t:this.shape_19,p:{x:177.6}},{t:this.shape_18,p:{x:202.1}},{t:this.shape_17,p:{x:226.7}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.8}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}},{t:this.shape_8}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_21,p:{x:104}},{t:this.shape_20,p:{x:128.5}},{t:this.shape_19,p:{x:153.1}},{t:this.shape_18,p:{x:177.6}},{t:this.shape_17,p:{x:202.1}},{t:this.shape_16,p:{x:226.7,y:192.1}},{t:this.shape_15,p:{y:215.4}},{t:this.shape_14,p:{x:104,y:238.8}},{t:this.shape_26,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}},{t:this.shape_8}]},24).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:128.5}},{t:this.shape_20,p:{x:153.1}},{t:this.shape_19,p:{x:177.6}},{t:this.shape_18,p:{x:202.1}},{t:this.shape_17,p:{x:226.7}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.8}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}},{t:this.instance_4}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_26,p:{x:104,y:192.1}},{t:this.shape_21,p:{x:128.5}},{t:this.shape_20,p:{x:153.1}},{t:this.shape_19,p:{x:177.6}},{t:this.shape_18,p:{x:202.1}},{t:this.shape_17,p:{x:226.7}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.8}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}},{t:this.shape_8}]},34).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:128.5}},{t:this.shape_20,p:{x:153.1}},{t:this.shape_19,p:{x:177.6}},{t:this.shape_18,p:{x:202.1}},{t:this.shape_17,p:{x:226.7}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.8}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}},{t:this.shape_8}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_21,p:{x:104}},{t:this.shape_20,p:{x:128.5}},{t:this.shape_19,p:{x:153.1}},{t:this.shape_18,p:{x:177.6}},{t:this.shape_17,p:{x:202.1}},{t:this.shape_16,p:{x:226.7,y:192.1}},{t:this.shape_15,p:{y:215.4}},{t:this.shape_14,p:{x:104,y:238.8}},{t:this.shape_13,p:{x:128.5}},{t:this.shape_12,p:{x:153.1}},{t:this.shape_11,p:{x:177.6}},{t:this.shape_10,p:{x:202.1}},{t:this.shape_9,p:{y:215.4}},{t:this.shape_27,p:{y:238.7}},{t:this.shape_8}]},8).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:128.5}},{t:this.shape_20,p:{x:153.1}},{t:this.shape_19,p:{x:177.6}},{t:this.shape_18,p:{x:202.1}},{t:this.shape_17,p:{x:226.7}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.8}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}},{t:this.shape_8}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_21,p:{x:104}},{t:this.shape_20,p:{x:128.5}},{t:this.shape_19,p:{x:153.1}},{t:this.shape_18,p:{x:177.6}},{t:this.shape_17,p:{x:202.1}},{t:this.shape_27,p:{y:192.1}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.7}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}},{t:this.shape_8}]},13).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:128.5}},{t:this.shape_20,p:{x:153.1}},{t:this.shape_19,p:{x:177.6}},{t:this.shape_18,p:{x:202.1}},{t:this.shape_17,p:{x:226.7}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.8}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_21,p:{x:104}},{t:this.shape_20,p:{x:128.5}},{t:this.shape_19,p:{x:153.1}},{t:this.shape_18,p:{x:177.6}},{t:this.shape_17,p:{x:202.1}},{t:this.shape_16,p:{x:226.7,y:192.1}},{t:this.shape_15,p:{y:215.4}},{t:this.shape_14,p:{x:104,y:238.8}},{t:this.shape_13,p:{x:128.5}},{t:this.shape_26,p:{x:153,y:215.4}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}}]},14).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:128.5}},{t:this.shape_20,p:{x:153.1}},{t:this.shape_19,p:{x:177.6}},{t:this.shape_18,p:{x:202.1}},{t:this.shape_17,p:{x:226.7}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.8}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}}]},3).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:128.5}},{t:this.shape_20,p:{x:153.1}},{t:this.shape_19,p:{x:177.6}},{t:this.shape_18,p:{x:202.1}},{t:this.shape_17,p:{x:226.7}},{t:this.shape_16,p:{x:104,y:215.4}},{t:this.shape_15,p:{y:238.8}},{t:this.shape_14,p:{x:128.5,y:215.4}},{t:this.shape_13,p:{x:153.1}},{t:this.shape_12,p:{x:177.6}},{t:this.shape_11,p:{x:202.1}},{t:this.shape_10,p:{x:226.7}},{t:this.shape_9,p:{y:238.8}}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.8,170,226.7,269.9);
// library properties:
lib.properties = {
	id: '8302729CD65AAF4EAB695A391C401932',
	width: 300,
	height: 300,
	fps: 24,
	color: "#333399",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8302729CD65AAF4EAB695A391C401932'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;




var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
        function init() {
            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            var comp = AdobeAn.getComposition("8302729CD65AAF4EAB695A391C401932");
            var lib = comp.getLibrary();
            handleComplete({}, comp);
        }
        function handleComplete(evt, comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib = comp.getLibrary();
            var ss = comp.getSpriteSheet();
            exportRoot = new lib.graphic();
            stage = new lib.Stage(canvas);
            //Registers the "tick" event listener.
            fnStartAnimation = function () {
                stage.addChild(exportRoot);
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS = 1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();
                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih = window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                    if (isResp) {
                        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                            sRatio = lastS;
                        }
                        else if (!isScale) {
                            if (iw < w || ih < h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w * pRatio * sRatio;
                    canvas.height = h * pRatio * sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                    stage.scaleX = pRatio * sRatio;
                    stage.scaleY = pRatio * sRatio;
                    lastW = iw; lastH = ih; lastS = sRatio;
                    stage.tickOnUpdate = false;
                    stage.update();
                    stage.tickOnUpdate = true;
                }
            }
            makeResponsive(true, 'width', false, 1);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }