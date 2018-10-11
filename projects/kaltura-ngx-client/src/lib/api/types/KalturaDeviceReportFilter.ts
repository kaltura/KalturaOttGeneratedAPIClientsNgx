
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportFilter, KalturaReportFilterArgs } from './KalturaReportFilter';

export interface KalturaDeviceReportFilterArgs  extends KalturaReportFilterArgs {
    lastAccessDateGreaterThanOrEqual? : number;
}


export class KalturaDeviceReportFilter extends KalturaReportFilter {

    lastAccessDateGreaterThanOrEqual : number;

    constructor(data? : KalturaDeviceReportFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceReportFilter' },
				lastAccessDateGreaterThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeviceReportFilter'] = KalturaDeviceReportFilter;