// sin values in degrees
var SIN_0 = Math.sin(0);
var SIN_45 = Math.sin(Math.PI/4);
var SIN_90 = Math.sin(Math.PI/2);
var SIN_180 = Math.sin(Math.PI);
var SIN_270 = Math.sin(Math.PI/2*3);

module("Test Component Sine", {
	setup: function() {
		var freq = new sfxkit.ComponentNumber().SetValue(1); 
		inp = new sfxkit.ComponentSine().SetFrequency(freq);

		ok( inp != null, "Input Sine Created" );
		}
	});

test("Returns 0 at time zero", function() {
	equal(inp.GetNextValue(0),SIN_0, "Value at 0 is " + SIN_0);
});

test("Returns correct value at 1/8 cycle", function() {
	var expectedValue = SIN_45;
	equal(inp.GetNextValue(.125),expectedValue, "Value at .125 is " + expectedValue);
});

test("Returns correct value at 1/4 cycle", function() {
	var expectedValue = SIN_90;
	equal(inp.GetNextValue(.25),expectedValue, "Value at .25 is " + expectedValue);
});

test("Returns correct value at 1/2 cycle", function() {
	var expectedValue = SIN_180;
	equal(inp.GetNextValue(.5),expectedValue, "Value at .5 is " + expectedValue);
});

test("Returns correct value at 3/4 cycle", function() {
	var expectedValue = SIN_270;
	equal(inp.GetNextValue(.75),expectedValue, "Value at .75 is " + expectedValue);
});

test("Returns correct value at full cycle", function() {
	var expectedValue = SIN_0;
	equal(inp.GetNextValue(1),0, "Value at 1 is " + expectedValue);
});

module("Test Component Sine Change Frequency", {
	setup: function() {
		freq = new sfxkit.ComponentNumber().SetValue(1);
		inp = new sfxkit.ComponentSine().SetFrequency(freq);

		frequency = 2;
		freq.SetValue(2); 

		ok( inp != null, "Input Sine Created" );
		}
	});

test("Input Returns 0 at time zero", function() {
	equal(inp.GetNextValue(0),SIN_0, "Value at 0 is 0");
});

test("Input Returns correct value at 1/8 cycle", function() {
	var expectedValue = SIN_45;
	equal(inp.GetNextValue(.125/frequency),expectedValue, "Value at .125 is " + expectedValue);
});

test("Input Returns correct value at 1/4 cycle", function() {
	var expectedValue = SIN_90;
	equal(inp.GetNextValue(.25/frequency),expectedValue, "Value at .25 is " + expectedValue);
});

test("Input Returns correct value at 1/2 cycle", function() {
	var expectedValue = SIN_180;
	equal(inp.GetNextValue(.5/frequency),expectedValue, "Value at .5 is " + expectedValue);
});

test("Input Returns correct value at 3/4 cycle", function() {
	var expectedValue = SIN_270;
	equal(inp.GetNextValue(.75/frequency),expectedValue, "Value at .75 is " + expectedValue);
});

test("Input Returns correct value at full cycle", function() {
	var expectedValue = SIN_0;
	equal(inp.GetNextValue(1/frequency),0, "Value at 1 is " + expectedValue);
});


