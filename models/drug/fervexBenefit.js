import { MAX_DRUG_BENEFIT } from "./constants"

export class FervexBenefit {
    constructor(drug) {
        if (drug.name != "Fervex") {
            throw new Error("The drug parameter received is incorrect. Its name should be 'Fervex'")
        }
        this.drug = drug
    }

    updateBenefitValue() {
        this.drug.expiresIn -= 1;
        if (this.drug.expiresIn < 0) {
            this.drug.benefit = 0
            return
        }

        if (this.drug.benefit >= MAX_DRUG_BENEFIT) {
            return
        }

        if (this.drug.expiresIn < 5) {
            this.drug.benefit = Math.min(this.drug.benefit + 3, MAX_DRUG_BENEFIT);
        }
        else if (this.drug.expiresIn < 10) {
            this.drug.benefit = Math.min(this.drug.benefit + 2, MAX_DRUG_BENEFIT);
        } else {
            this.drug.benefit = Math.min(this.drug.benefit + 1);
        }
    }
}