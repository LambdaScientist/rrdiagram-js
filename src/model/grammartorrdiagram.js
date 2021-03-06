import Rule from './rule';
import RRDiagram from '../ui/rrdiagram';

export default class GrammarToRRDiagram {

    constructor() {
        this.ruleLinkProvider = (ruleName) => '#' + ruleName;
        this.ruleConsideredAsLineBreak = null;
    }

    /**
     * @param {Rule} rule 
     * @return {RRDiagram}
     */
    convert(rule) {
        return rule.toRRDiagram(this);
    }
}