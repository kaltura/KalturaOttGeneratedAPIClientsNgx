
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecording } from './KalturaRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingStopActionArgs  extends KalturaRequestArgs {
    programId : number;
	epgChannelId : number;
	householdRecordingId : number;
}

/**
 * Build request payload for service 'recording' action 'stop'.
 *
 * Usage: Stop current recording
 *
 * Server response type:         KalturaRecording
 * Server failure response type: KalturaAPIException
 */
export class RecordingStopAction extends KalturaRequest<KalturaRecording> {

    programId : number;
	epgChannelId : number;
	householdRecordingId : number;

    constructor(data : RecordingStopActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRecording', responseConstructor : KalturaRecording  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'recording' },
				action : { type : 'c', default : 'stop' },
				programId : { type : 'n' },
				epgChannelId : { type : 'n' },
				householdRecordingId : { type : 'n' }
            }
        );
        return result;
    }
}

