
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryItemFilter, KalturaCategoryItemFilterArgs } from './KalturaCategoryItemFilter';

export interface KalturaCategoryItemAncestorsFilterArgs  extends KalturaCategoryItemFilterArgs {
    id? : number;
}


export class KalturaCategoryItemAncestorsFilter extends KalturaCategoryItemFilter {

    id : number;

    constructor(data? : KalturaCategoryItemAncestorsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItemAncestorsFilter' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryItemAncestorsFilter'] = KalturaCategoryItemAncestorsFilter;