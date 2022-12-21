import { Injectable } from '@angular/core';
import { Risk } from '../../../../../models/project/profile/risk';
import { Serializer } from '../../../serializer';

@Injectable({
    providedIn: 'root',
})
export class ProjectRiskSerializerService implements Serializer<Risk> {
    public fromJson(json: any): Risk {
        json = json || {};
        const obj: Risk = {
            criticalityRisk: json.criticalityRisk ?? null,
            fibonacciRisk: json.fibonacciRisk ?? null,
            activityRisk: json.activityRisk ?? null,
            criticalWeight: json.criticalWeight ?? 4,
            redWeight: json.redWeight ?? 3,
            yellowWeight: json.yellowWeight ?? 2,
            greenWeight: json.greenWeight ?? 1,
            criticalCount: json.criticalCount ?? 0,
            redCount: json.redCount ?? 0,
            yellowCount: json.yellowCount ?? 0,
            greenCount: json.greenCount ?? 0,
            maxFloat: json.maxFloat ?? 0,
            sumFloat: json.sumFloat ?? 0,
            decompressAmount: json.decompressAmount ?? 0,
        };
        return obj;
    }
    toJson(obj: Risk): any {}
}
