import './Plan.css'

function Plan() {
  return (
    <div className='plan-container'>
        <div className='plan-type'>
            <h1 className='choose-plan'>Choose your plan</h1>
            <p className='choice-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            <div className='slide-button'>
                <span className='month-butn'>monthly</span>
                <span className='year-butn'>yearly</span>
            </div>
        </div>
        <div className='plans'>
            <div className='basic-plan'>
                <h2 className='plan-name'>Basic Plan</h2>
                <p className='plan-des'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                <h1 className='plan-cost'><strong>$ 54</strong></h1> <h2 className='plan-duration'>/month</h2>
                <ul className='plan-action'>
                    <li><strong>Free access to video class</strong></li>
                    <li><strong>Free access to video class</strong></li>
                    <li><strong>Free access to video class</strong></li>
                </ul>
                <button className='button3'>Start Free Trial</button>
            </div>
        </div>
        <div className='plans'>
            <div className='premium-plan'>
                    <h2 className='plan-name'>Premium Plan</h2>
                    <p className='plan-des'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <h1 className='plan-cost'><strong>$ 54</strong></h1> <h2 className='plan-duration'>/month</h2>
                    <ul className='plan-action'>
                        <li><strong>Free access to video class</strong></li>
                        <li><strong>Free access to video class</strong></li>
                        <li><strong>Free access to video class</strong></li>
                    </ul>
                    <button className='button3'>Start Free Trial</button>
            </div>
        </div>
        <div className='plans'>
            <div className='basics-plan'>
                    <h2 className='plan-name'>Basic Plan</h2>
                    <p className='plan-des'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <h1 className='plan-cost'><strong>$ 54</strong></h1> <h2 className='plan-duration'>/month</h2>
                    <ul className='plan-action'>
                        <li><strong>Free access to video class</strong></li>
                        <li><strong>Free access to video class</strong></li>
                        <li><strong>Free access to video class</strong></li>
                    </ul>
                    <button className='button3'>Start Free Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Plan