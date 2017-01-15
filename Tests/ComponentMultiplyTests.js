module("Test Component Multiply", {
		});

test("Multiply Returns values multiplied together at time zero", function() {
	var inpA = new sfxkit.ComponentNumber().SetValue(2);
	var inpB = new sfxkit.ComponentNumber().SetValue(3);
    var inpMultiply = new sfxkit.ComponentMultiply()
        .SetValueA(inpA)
        .SetValueB(inpB);
	equal(inpMultiply.GetNextValue(0),6, "Value at 0 is 6");
});

test("Multiply Returns values multiplied together at time not zero", function() {
	var inpA = new sfxkit.ComponentNumber().SetValue(2);
	var inpB = new sfxkit.ComponentNumber().SetValue(3);
    var inpMultiply = new sfxkit.ComponentMultiply()
        .SetValueA(inpA)
        .SetValueB(inpB);
	equal(inpMultiply.GetNextValue(1),6, "Value at 1 is 6");
});
