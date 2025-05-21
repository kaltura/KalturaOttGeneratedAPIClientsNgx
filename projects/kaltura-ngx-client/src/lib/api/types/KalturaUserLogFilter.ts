
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUserLogFilterArgs  extends KalturaFilterArgs {
    userIdIn? : string;
	startDate? : number;
	endDate? : number;
}


export class KalturaUserLogFilter extends KalturaFilter {

    userIdIn : string;
	startDate : number;
	endDate : number;

    constructor(data? : KalturaUserLogFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserLogFilter' },
				userIdIn : { type : 's' },
				startDate : { type : 'n' },
				endDate : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserLogFilter'] = KalturaUserLogFilter;