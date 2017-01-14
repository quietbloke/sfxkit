var sfxkit;
(function (sfxkit) {
    class ComponentNumber {
        GetNextValue(timespan) {
            return this.value;
        }
        Reset() {
            return;
        }
        SetValue(value) {
            this.value = value;
            return this;
        }
    }
    sfxkit.ComponentNumber = ComponentNumber;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class ComponentSine {
        constructor(freq) {
            this.angle = 0;
            this.initialAngle = 0;
            this.frequency = freq;
        }
        GetNextValue(timeSpan) {
            var angleInc = timeSpan * this.frequency.GetNextValue(timeSpan) * (Math.PI * 2);
            this.angle += angleInc;
            if (this.angle >= Math.PI * 2)
                this.angle -= Math.PI * 2;
            return Math.sin(this.angle);
        }
        ;
        Reset() {
            this.angle = this.initialAngle;
            this.frequency.Reset();
        }
        SetFrequency(value) {
            this.frequency = value;
            return this;
        }
        InitialAngle(initailAngle) {
            this.initialAngle = initailAngle;
            return this;
        }
    }
    sfxkit.ComponentSine = ComponentSine;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class PlayerBasic {
        BuildData(bitrate, duration, osc) {
            var values = new Array();
            var valueSize = 1;
            var inc = 1 / bitrate;
            values[0] = osc.GetNextValue(0);
            for (var x = inc; x <= duration; x = x + inc) {
                var value = osc.GetNextValue(inc);
                values[valueSize++] = value;
            }
            return values;
        }
    }
    sfxkit.PlayerBasic = PlayerBasic;
})(sfxkit || (sfxkit = {}));
