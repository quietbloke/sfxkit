module("Test Component Number", {
		});

test("Number GetNextValue Returns given value at time zero", function() {
	var	inp = new sfxkit.ComponentNumber().SetValue(1);
	equal(inp.GetNextValue(0),1, "Value at 0 is 1");
});

test("Number GetNextValue Returns given value at time not zero", function() {
	var	inp = new sfxkit.ComponentNumber().SetValue(1);
	equal(inp.GetNextValue(.1),1, "Value at .1 is 1");
});