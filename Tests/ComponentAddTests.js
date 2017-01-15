module("Test Component Add", {
		});

test("Add Returns values added together at time zero", function() {
	var inpA = new sfxkit.ComponentNumber().SetValue(1);
	var inpB = new sfxkit.ComponentNumber().SetValue(2);
    var inpAdd = new sfxkit.ComponentAdd()
        .SetValueA(inpA)
        .SetValueB(inpB);
	equal(inpAdd.GetNextValue(0),3, "Value at 0 is 3");
});

test("Add Returns values added together at time not zero", function() {
	var inpA = new sfxkit.ComponentNumber().SetValue(1);
	var inpB = new sfxkit.ComponentNumber().SetValue(2);
    var inpAdd = new sfxkit.ComponentAdd()
        .SetValueA(inpA)
        .SetValueB(inpB);
	equal(inpAdd.GetNextValue(1),3, "Value at 1 is 3");
});
