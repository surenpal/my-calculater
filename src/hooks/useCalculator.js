import { useState, useCallback } from "react";

export default function useCalculator() {

    const [curValue, setValue] = useState("");
    const [prevValue, setPrevValue] = useState("");
    const [operation, setOperation] = useState(null);
    const MAX_LENGTH = 12;

    const appendNumber = useCallback((num) => {
        setValue((prev) => {
            if (prev === "Error") return num;
            if (prev.length >= MAX_LENGTH) return prev;
            if (num === "." && prev.includes(".")) return prev;
            if (num === "." && prev === "") return "0.";
            return prev + num;
        });
    }, []);

    const clear = useCallback(() => {
        setValue("");
        setPrevValue("");
        setOperation(null);
    }, []);

    const backspace = useCallback(() => {
        setValue((prev) => {
            if (prev === "Error") return "";
            return prev.length > 1 ? prev.slice(0, -1) : "";
        });
    }, []);

    const percentage = useCallback(() => {
        setValue((prev) => {
            if (prev === "" || prev === "Error") return prev;
            const num = parseFloat(prev);
            if (isNaN(num)) return prev;
            return (num / 100).toString().slice(0, MAX_LENGTH);
        });
    }, []);

    const setOp = useCallback((op) => {
        setValue((curVal) => {
            if (curVal === "" || curVal === "Error") return curVal;
            setPrevValue(curVal);
            setOperation(op);
            return "";
        });
    }, []);

    function calculate() {
        const prev = parseFloat(prevValue);
        const cur = parseFloat(curValue);

        if (isNaN(prev) || isNaN(cur)) return;

        let result;

        switch (operation) {
            case "+": result = prev + cur; break;
            case "-": result = prev - cur; break;
            case "*": result = prev * cur; break;
            case "÷":
                if (cur === 0) {
                    setValue("Error");
                    setPrevValue("");
                    setOperation(null);
                    return;
                }
                result = prev / cur;
                break;
            default:
                return;
        }

        const resultStr = parseFloat(result.toPrecision(10)).toString();
        setValue(resultStr.slice(0, MAX_LENGTH));
        setPrevValue("");
        setOperation(null);
    }

    return {
        curValue,
        prevValue,
        operation,
        appendNumber,
        setOp,
        calculate,
        clear,
        backspace,
        percentage,
    };
}
