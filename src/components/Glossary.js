import React from 'react'

import '../CSS/Glossary.css';
//https://www.worldbadminton.com/glossary.htm
const termsData = [
    {term:'Rallies', 
        definition: 'A sequence of one or more strokes starting with the service, until the shuttle ceases to be in play.'},
    {term:'Sets', 
        definition: ' A call by a player that indicates the choice to "set" the game by extending play for extra points. In most cases game sets are up to 21 points.'},
    {term:'Smash FG', 
        definition: "FG refers to Field Goal, a point scored by a player. Smash is a hard-hit overhead shot that forces the shuttle sharply downward. Badminton's primary attacking stroke."},
    {term:'Smash Attempt', 
        definition: 'A player may attempt a smash and not score a point, but also not lose a point. '},
    {term:'Drop FG', 
    definition: ' A shot hit such that it barely clears the net and falls very in the court (hopefully in front of the short service line). Drops can be hit from anywhere in the court and from any height, but typically are downward overhead shots from back court or upward or flat shots hit from the front court. Hairpin drops are hit from very close to the net and travel upward and over the net. Drops hit from near the net are also called Net Shots'},
    {term:'Drop Attempt', 
        definition: 'A player may attempt a drop and not score a point, but also not lose a point'},
    {term:'Clear FG', 
        definition: "A high and deep shot designed to push the receiver to the back of the court. A defensive clear is very high in order to give the hitter time to prepare for the return and hence to slow down the rally. An offensive or attacking clear is lower but still over the receiver's reach and is designed to push the receiver back quickly in the hopes of a weaker return."},
    {term:'Clear Attempt', 
        definition: 'A player may attempt a clear and not score a point, but also not lose a point'},

];
const Glossary = () => {

    return(
    <div className = 'glContainer'>
        <h1 className ='glHeader'>Glossary</h1>
        <dl className = 'glList'>
            {termsData.map((term,index) =>(

                <div>
                    <dt className = 'glTerm'>{term.term}</dt>
                    <dd className = 'glDef'>{term.definition}</dd>

                </div>
            ))}
        </dl>

    </div>

)
}

export default Glossary