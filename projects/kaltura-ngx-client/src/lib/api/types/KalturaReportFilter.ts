
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaReportFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaReportFilter extends KalturaFilter {

    

    constructor(data? : KalturaReportFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportFilter'] = KalturaReportFilter;