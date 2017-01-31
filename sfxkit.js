var sfxkit;
(function (sfxkit) {
    class ComponentAdd {
        GetNextValue(timeSpan) {
            return this.inputA.GetNextValue(timeSpan) + this.inputB.GetNextValue(timeSpan);
        }
        Reset() {
            this.inputA.Reset();
            this.inputB.Reset();
        }
        SetValueA(value) {
            this.inputA = value;
            return this;
        }
        SetValueB(value) {
            this.inputB = value;
            return this;
        }
    }
    sfxkit.ComponentAdd = ComponentAdd;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class ComponentMultiply {
        GetNextValue(timeSpan) {
            return this.inputA.GetNextValue(timeSpan) * this.inputB.GetNextValue(timeSpan);
        }
        Reset() {
            this.inputA.Reset();
            this.inputB.Reset();
        }
        SetValueA(value) {
            this.inputA = value;
            return this;
        }
        SetValueB(value) {
            this.inputB = value;
            return this;
        }
    }
    sfxkit.ComponentMultiply = ComponentMultiply;
})(sfxkit || (sfxkit = {}));
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
    class ComponentOscillator {
        constructor(freq) {
            this.angle = 0;
            this.initialAngle = 0;
            this.frequency = freq;
            this.oscillator = new sfxkit.OscillatorSine();
        }
        GetNextValue(timeSpan) {
            var angleInc = timeSpan * this.frequency.GetNextValue(timeSpan) * (Math.PI * 2);
            var newCycle = false;
            this.angle += angleInc;
            if (this.angle >= Math.PI * 2) {
                this.angle -= Math.PI * 2;
                newCycle = true;
            }
            return this.oscillator.GetValueAt(this.angle, newCycle);
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
        SetInitialAngle(initailAngle) {
            this.initialAngle = initailAngle;
            return this;
        }
        SetOscillator(oscillator) {
            this.oscillator = oscillator;
            return this;
        }
    }
    sfxkit.ComponentOscillator = ComponentOscillator;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class OscillatorRandom {
        constructor() {
            this.currentValue = Math.random() * 2 - 1;
        }
        GetValueAt(angle, newCycle) {
            if (newCycle)
                this.currentValue = Math.random() * 2 - 1;
            return this.currentValue;
        }
    }
    sfxkit.OscillatorRandom = OscillatorRandom;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class OscillatorSine {
        GetValueAt(angle, newCycle) {
            return Math.sin(angle);
        }
    }
    sfxkit.OscillatorSine = OscillatorSine;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class OscillatorSquare {
        GetValueAt(angle, newCycle) {
            if (angle < Math.PI)
                return 1;
            else
                return -1;
        }
    }
    sfxkit.OscillatorSquare = OscillatorSquare;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class PlayerBasic {
        BuildData(bitrate, duration, osc) {
            var values = new Array();
            var valueSize = 1;
            var inc = 1 / bitrate;
            osc.Reset();
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
var sfxkit;
(function (sfxkit) {
    class Sound {
        CreateObject(data, bitrate) {
            var wavData = this.createWav(data, bitrate);
            var encoded = btoa(wavData);
            var src = 'data:audio/wav;base64,' + encoded;
            var a = new Audio();
            a.src = src;
            return a;
        }
        createWav(data, bitrate) {
            var n = data.length;
            var wavData = "RIFF****WAVEfmt \x10\x00\x00\x00\x01\x00\x01\x00********\x01\x00\x08\x00data****";
            var numval = n + 36;
            wavData = this.insertLong(wavData, 4, numval);
            numval = bitrate;
            wavData = this.insertLong(wavData, 24, numval);
            numval = bitrate * 8;
            wavData = this.insertLong(wavData, 28, numval);
            numval = n;
            wavData = this.insertLong(wavData, 40, numval);
            for (var i = 0; i < n; ++i) {
                var charCode = Math.round(Math.min(127, Math.max(-127, data[i] * 127)) + 127);
                wavData += String.fromCharCode(charCode);
            }
            return wavData;
        }
        insertLong(inString, index, inValue) {
            var retString = inString.substr(0, index);
            for (var i = 0; i < 4; ++i) {
                retString += String.fromCharCode(inValue & 255);
                inValue = inValue >> 8;
            }
            retString += inString.substr(index + 4);
            return retString;
        }
    }
    sfxkit.Sound = Sound;
})(sfxkit || (sfxkit = {}));
