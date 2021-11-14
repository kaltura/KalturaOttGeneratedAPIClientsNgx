
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchPriorityCriteriaType } from './KalturaSearchPriorityCriteriaType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchPriorityCriteriaArgs  extends KalturaObjectBaseArgs {
    type? : KalturaSearchPriorityCriteriaType;
	value? : string;
}


export class KalturaSearchPriorityCriteria extends KalturaObjectBase {

    type : KalturaSearchPriorityCriteriaType;
	value : string;

    constructor(data? : KalturaSearchPriorityCriteriaArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchPriorityCriteria' },
				type : { type : 'es', subTypeConstructor : KalturaSearchPriorityCriteriaType, subType : 'KalturaSearchPriorityCriteriaType' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchPriorityCriteria'] = KalturaSearchPriorityCriteria;