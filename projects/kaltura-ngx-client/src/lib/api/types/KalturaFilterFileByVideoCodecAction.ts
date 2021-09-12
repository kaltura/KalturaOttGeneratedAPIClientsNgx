
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByVideoCodecActionArgs  extends KalturaFilterActionArgs {
    videoCodecIn? : string;
}


export class KalturaFilterFileByVideoCodecAction extends KalturaFilterAction {

    videoCodecIn : string;

    constructor(data? : KalturaFilterFileByVideoCodecActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByVideoCodecAction' },
				videoCodecIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByVideoCodecAction'] = KalturaFilterFileByVideoCodecAction;