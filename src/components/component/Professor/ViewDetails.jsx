/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1S72y7fl9QY
 */
import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CardContent, Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress";
import Navbar from '@/components/ui/Navbar';
import { Link } from 'react-router-dom';

function ViewDetails({classes}) {
  return (
    
    <div>
         <Navbar name="Teacher Dashboard"/>
    
    <Card className="w-3/4 px-4 ml-12 mr-12 mx-auto space-y-6">
        <CardContent>
      <div className=" space-y-2">
        
        <h1 className="text-3xl  mb-3 mt-2 font-bold">Introduction to CSS</h1>
       
      </div>
      <div className="space-y-2">
        <Card className="border-t">
          <CardContent className="flex shadow-lg items-center gap-4 p-4">
            <Checkbox id="completed-1" />
            <div className="grid gap-1 shadow-lg">
              <Label  htmlFor="completed-1">Introduction to CSS</Label>
              
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex shadow-lg items-center gap-4 p-4">
            <Checkbox id="completed-2" />
            <div className="grid gap-1 shadow-lg">
              <Label htmlFor="completed-2">Selectors and Styles</Label>
              
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center shadow-lg gap-4 p-4">
            <Checkbox id="completed-3" />
            <div className="grid gap-1">
              <Label htmlFor="completed-3">Layout and Positioning</Label>
            </div>
          </CardContent>
        </Card>
       
        
       
        
      </div>
      </CardContent>
    </Card>
    
    </div>
    
  );
}

export default ViewDetails;