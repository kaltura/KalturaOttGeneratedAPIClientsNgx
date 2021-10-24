
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByStreamerTypeActionArgs  extends KalturaFilterActionArgs {
    streamerTypeIn? : string;
}


export class KalturaFilterFileByStreamerTypeAction extends KalturaFilterAction {

    streamerTypeIn : string;

    constructor(data? : KalturaFilterFileByStreamerTypeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByStreamerTypeAction' },
				streamerTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByStreamerTypeAction'] = KalturaFilterFileByStreamerTypeAction;