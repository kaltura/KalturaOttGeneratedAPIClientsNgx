
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryItemFilter, KalturaCategoryItemFilterArgs } from './KalturaCategoryItemFilter';

export interface KalturaCategoryItemByKsqlFilterArgs  extends KalturaCategoryItemFilterArgs {
    kSql? : string;
}


export class KalturaCategoryItemByKsqlFilter extends KalturaCategoryItemFilter {

    kSql : string;

    constructor(data? : KalturaCategoryItemByKsqlFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItemByKsqlFilter' },
				kSql : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryItemByKsqlFilter'] = KalturaCategoryItemByKsqlFilter;