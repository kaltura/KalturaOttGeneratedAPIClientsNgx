
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryItemFilter, KalturaCategoryItemFilterArgs } from './KalturaCategoryItemFilter';

export interface KalturaCategoryItemSearchFilterArgs  extends KalturaCategoryItemFilterArgs {
    kSql? : string;
	rootOnly? : boolean;
}


export class KalturaCategoryItemSearchFilter extends KalturaCategoryItemFilter {

    kSql : string;
	rootOnly : boolean;

    constructor(data? : KalturaCategoryItemSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItemSearchFilter' },
				kSql : { type : 's' },
				rootOnly : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryItemSearchFilter'] = KalturaCategoryItemSearchFilter;