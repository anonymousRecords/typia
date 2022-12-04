import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ClassGetter = _test_validateClone(
    "ClassGetter",
    ClassGetter.generate,
    (input) => TSON.validateClone(input),
    ClassGetter.SPOILERS,
);
