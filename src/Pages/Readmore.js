import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ReadMore = ({ children, maxLength = 100 }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => setIsReadMore(!isReadMore);

    const text = children;
    const displayText = isReadMore ? text.slice(0, maxLength) : text;

    return (
        <div>
            <p>
                {displayText}
                {text.length > maxLength && (
                    <>
                        {isReadMore ? '...' : ''}
                        <Button variant="link" onClick={toggleReadMore} style={{ padding: 0, marginLeft: '5px' }}>
                            {isReadMore ? 'Read More' : 'Show Less'}
                        </Button>
                    </>
                )}
            </p>
        </div>
    );
};

export default ReadMore;
