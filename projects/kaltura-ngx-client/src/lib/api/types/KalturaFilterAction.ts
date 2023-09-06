
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBasePreActionCondition } from './KalturaBasePreActionCondition';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterActionArgs  extends KalturaAssetRuleActionArgs {
    preActionCondition? : KalturaBasePreActionCondition;
}


export class KalturaFilterAction extends KalturaAssetRuleAction {

    preActionCondition : KalturaBasePreActionCondition;

    constructor(data? : KalturaFilterActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterAction' },
				preActionCondition : { type : 'o', subTypeConstructor : KalturaBasePreActionCondition, subType : 'KalturaBasePreActionCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterAction'] = KalturaFilterAction;