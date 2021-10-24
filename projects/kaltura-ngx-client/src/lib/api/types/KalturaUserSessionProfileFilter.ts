
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUserSessionProfileFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
}


export class KalturaUserSessionProfileFilter extends KalturaFilter {

    idEqual : number;

    constructor(data? : KalturaUserSessionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSessionProfileFilter' },
				idEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserSessionProfileFilter'] = KalturaUserSessionProfileFilter;