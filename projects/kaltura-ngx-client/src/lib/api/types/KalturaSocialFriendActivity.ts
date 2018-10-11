
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSocialAction } from './KalturaSocialAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialFriendActivityArgs  extends KalturaObjectBaseArgs {
    userFullName? : string;
	userPictureUrl? : string;
	socialAction? : KalturaSocialAction;
}


export class KalturaSocialFriendActivity extends KalturaObjectBase {

    userFullName : string;
	userPictureUrl : string;
	socialAction : KalturaSocialAction;

    constructor(data? : KalturaSocialFriendActivityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialFriendActivity' },
				userFullName : { type : 's' },
				userPictureUrl : { type : 's' },
				socialAction : { type : 'o', subTypeConstructor : KalturaSocialAction, subType : 'KalturaSocialAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSocialFriendActivity'] = KalturaSocialFriendActivity;