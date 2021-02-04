import React from 'react';
import Button from './Button';
import './Button.css';

const ButtonsContainer = () => {

    return (
        <div className="wrapper">
            <div>
                <p className="text">{`<Button />`}</p><br/><br/>
                <Button value="Default"/>
            </div>
            <div>
                <p className="text">{`<Button variant="outline" />`}</p><br/><br/>
                <Button variant="outline" value="Default" />
            </div>
            <div>
                <p className="text">{`<Button variant="text" />`}</p><br/><br/>
                <Button variant="text" value="Default" />
            </div>
            <div>
                <p className="text">{`<Button disableShadow />`}</p><br/><br/>
                <Button disableShadow={true} value="Default" />
            </div>
            <div>
                <p className="text">{`<Button disabled />`}</p><br/><br/>
                <Button disabled={true} value="Default" />
            </div>
            <div>
                <p className="text">{`<Button variant=”text” disabled />`}</p><br/><br/>
                <Button variant="text" disabled={true} value="Default" />
            </div>
            <div>
                <p className="text">{`<Button size=”sm” />`}</p><br/><br/>
                <Button size="sm" value="Default" />
            </div>
            <div>
                <p className="text">{`<Button size=”md” />`}</p><br/><br/>
                <Button size="md" value="Default" />
            </div>
            <div>
                <p className="text">{`<Button size=”lg” />`}</p><br/><br/>
                <Button size="lg" value="Default" />
            </div>
            <div>
                <p className="text">{`<Button color=”default” />`}</p><br/><br/>
                <Button color="default" value="Default" />
            </div>
            <div>
                <p className="text">{`<Button color="primary" />`}</p><br/><br/>
                <Button color="primary" value="Default" />
            </div>
            <div>
                <p className="text">{`<Button color="secondary" />`}</p><br/><br/>
                <Button color="secondary" value="Secondary" />
            </div>
            <div>
                <p className="text">{`<Button color="danger"/>`}</p><br/><br/>
                <Button color="danger" value="Danger" />
            </div>
        </div>

    );
};

export default ButtonsContainer;