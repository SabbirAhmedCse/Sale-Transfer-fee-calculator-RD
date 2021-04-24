$('input.number').keyup(function (event) {

    // skip for arrow keys
    if (event.which >= 37 && event.which <= 40) return;

    // format number
    $(this).val(function (index, value) {
        return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
});

let preview_image = () => {
    let reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

const dateHidden1 = () => {
    document.getElementById("tDate").hidden = false;
    document.getElementById("transferDateValue").hidden = true; 
}
const dateHidden2 = () => {
    document.getElementById("startDate").hidden = false;
    document.getElementById("contractStartDateValue").hidden = true;   
}
const dateHidden3 = () => {
    document.getElementById("endDate").hidden = false;
    document.getElementById("contractEndDateValue").hidden = true; 
}

const dateFormatter1 = () => {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let  d1 = new Date(document.getElementById("tDate").value);
    
    console.log(d1);
    // date
  let  tDate = d1.getDate();
    
    //month
    mn1 = d1.getMonth();
    
    //year
    yy1 = d1.getFullYear();
    
    document.getElementById("transferDateValue").value = month[mn1] + "/" + tDate + "/" + yy1;
    
    
    document.getElementById("transferDateValue").hidden = false;
    document.getElementById("tDate").hidden = true;
    
    
}
const dateFormatter2 = () => {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let  d1 = new Date(document.getElementById("startDate").value);
    
    console.log(d1);
    // date
  let  startDate = d1.getDate();
    //month
    mn1 = d1.getMonth();
    
    //year
    yy1 = d1.getFullYear();
    
    document.getElementById("contractStartDateValue").value = month[mn1] + "/" + startDate + "/" + yy1;
    
    
    document.getElementById("contractStartDateValue").hidden = false;
    document.getElementById("startDate").hidden = true;
    
}
const dateFormatter3 = () => {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   let d1 = new Date(document.getElementById("endDate").value);
    
    // date
  let  endDate = d1.getDate();
    
    //month
    mn1 = d1.getMonth();
    
    //year
    yy1 = d1.getFullYear();
    
    document.getElementById("contractEndDateValue").value = month[mn1] + "/" + endDate + "/" + yy1;
    
    document.getElementById("contractEndDateValue").hidden = false;
    document.getElementById("endDate").hidden = true;
    
}

const SaleTransferCalculater = () => {
    let formettar = new Intl.NumberFormat('en');
    
     //Sale Transfer  value formattar
    
    let departmentAdminFeesValue = parseInt(document.getElementById('departmentAdminFeesValue').value.replaceAll(",", ""));
    document.getElementById('departmentAdminFeesValue').value = formettar.format(departmentAdminFeesValue);
    
    let registrationTrusteeFeesValue = parseInt(document.getElementById('registrationTrusteeFeesValue').value.replaceAll(",", ""));
    document.getElementById('registrationTrusteeFeesValue').value = formettar.format(registrationTrusteeFeesValue);
    
    let advancedPaidSellerValue = parseInt(document.getElementById('advancedPaidSellerValue').value.replaceAll(",", ""));
    document.getElementById('advancedPaidSellerValue').value = formettar.format(advancedPaidSellerValue);
    
    let applicableReimbursmentValue = parseInt(document.getElementById('applicableReimbursmentValue').value.replaceAll(",", ""));
    document.getElementById('applicableReimbursmentValue').value = formettar.format(applicableReimbursmentValue);
    
    let rentCollectedValue = parseInt(document.getElementById('rentCollectedValue').value.replaceAll(",", ""));
    document.getElementById('rentCollectedValue').value = formettar.format(rentCollectedValue);
    
    let totalRentAmountValue = parseInt(document.getElementById('totalRentAmountValue').value.replaceAll(",", ""));
    document.getElementById('totalRentAmountValue').value = formettar.format(totalRentAmountValue);
    
    let securityDepositReimbursedValue = parseInt(document.getElementById('securityDepositReimbursedValue').value.replaceAll(",", ""));
    document.getElementById('securityDepositReimbursedValue').value = formettar.format(securityDepositReimbursedValue);
    
    //Sale Transfer calculation value formattar

    let priceValue = parseInt(document.getElementById('priceValue').value.replaceAll(",", ""));
    document.getElementById('priceValue').value = formettar.format(priceValue);
    
    let sizeValue = parseInt(document.getElementById('sizeValue').value.replaceAll(",", ""));
    document.getElementById('sizeValue').value = formettar.format(sizeValue);
    
    let serviceChargeValue = parseInt(document.getElementById('serviceChargeValue').value.replaceAll(",", ""));
    document.getElementById('serviceChargeValue').value = formettar.format(serviceChargeValue);
    
    let rentalContractValue = parseInt(document.getElementById('rentalContractValue').value.replaceAll(",", ""));
    document.getElementById('rentalContractValue').value = formettar.format(rentalContractValue);

    
    
    let dubaiDepartmentTransferFeeValue = priceValue * 0.04;
    if (!isNaN(dubaiDepartmentTransferFeeValue)) {
        document.getElementById('dubaiDepartmentTransferFeeValue').value = formettar.format(dubaiDepartmentTransferFeeValue);
    }

    let brokerageCommissionValue = priceValue * 0.02;

    if (!isNaN(brokerageCommissionValue)) {
        document.getElementById('brokerageCommissionValue').value = formettar.format(brokerageCommissionValue);
    }

    
    let yearlyServiceChargeValue = sizeValue * serviceChargeValue;
    if (!isNaN(yearlyServiceChargeValue)) {
        document.getElementById('yearlyServiceChargeValue').value = formettar.format(yearlyServiceChargeValue);
    }

    let securityDepositValue = rentalContractValue * 0.05;

    if (!isNaN(securityDepositValue)) {
        document.getElementById('securityDepositValue').value = formettar.format(securityDepositValue);
    }


}

const SaleTransferPdf = () => {

    const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4'
    });
    let pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    let right = pageWidth / 4;
    let left = (pageWidth * 3) / 4;
    let marginLeft = 15;
    let marginRight = 120;
    console.log(doc);

    //color

    console.log(right);
    console.log(left);
    console.log(pageWidth);
    console.log(pageHeight);
    console.log(doc);

    let opt = {
        align: 'right',
        angle: 90,
        width: 100
    };





    let output = document.getElementById("output");
    let imageData = output.src;
    if (imageData == '')
        alert('Please upload logo');


    else {

        //Left side 1st page

        doc.addImage(imageData, 'jpeg', marginLeft, 15, 60, 30);

        let propertyDetails = document.getElementById("propertyDetails");
        doc.fromHTML(propertyDetails, marginLeft, 45);

        let property = document.getElementById("property");
        doc.fromHTML(property, marginLeft, 60);
        let propertyValue = document.getElementById("propertyValue").value;
        doc.setFontSize(11).setFont("times", "normal").setTextColor(128).text(propertyValue, right, 81, 'center').setDrawColor(255, 0, 0).setLineWidth(9 / 30).roundedRect(marginLeft, 75, 75, 9, 1, 1, 'D');

        let size = document.getElementById("size");
        doc.fromHTML(size, marginLeft, 90);
        let sizeValue = document.getElementById("sizeValue").value;
        doc.text(sizeValue, right, 116, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginLeft, 110, 75, 9, 1, 1, 'D');

        let transferFees = document.getElementById("transferFees");
        doc.fromHTML(transferFees, marginLeft, 120);

        let dubaiDepartmentTransferFee = document.getElementById("dubaiDepartmentTransferFee");
        doc.fromHTML(dubaiDepartmentTransferFee, marginLeft, 135);
        doc.text("4% of the sale price in Manager's Cheque to DLD",marginLeft,147)
        let dubaiDepartmentTransferFeeValue = document.getElementById("dubaiDepartmentTransferFeeValue").value;
        doc.text(dubaiDepartmentTransferFeeValue, right, 161, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.5).roundedRect(marginLeft, 155, 75, 9, 1, 1, 'D');

        let registrationTrusteeFees = document.getElementById("registrationTrusteeFees");
        doc.fromHTML(registrationTrusteeFees, marginLeft, 170);
        let registrationTrustee = doc.splitTextToSize("2,000 AED If sale value 500,000 and AED 4,000 AED if above + 5% VAT", 80);
		doc.setFontSize(10).setTextColor(150).text(registrationTrustee, marginLeft, 182);
        let registrationTrusteeFeesValue = document.getElementById("registrationTrusteeFeesValue").value;
        doc.text(registrationTrusteeFeesValue, right, 196, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginLeft, 190, 75, 9, 1, 1, 'D');

        let servieChargeReimbursement = document.getElementById("servieChargeReimbursement");
        doc.fromHTML(servieChargeReimbursement, marginLeft, 200);

        let serviceCharge = document.getElementById("serviceCharge");
        doc.fromHTML(serviceCharge, marginLeft, 215);
        let serviceChargeValue = document.getElementById("serviceChargeValue").value;
        doc.text(serviceChargeValue, right, 241, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginLeft, 235, 75, 9, 1, 1, 'D');

        let advancedPaidSeller = document.getElementById("advancedPaidSeller");
        doc.fromHTML(advancedPaidSeller, marginLeft, 250);
        let advancedPaidSellerValue = document.getElementById("advancedPaidSellerValue").value;
        doc.text(advancedPaidSellerValue, right, 276, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginLeft, 270, 75, 9, 1, 1, 'D');


        // Right side 1st page

        let subject = document.getElementById("subject").value;
        doc.setFontSize(16).setFont("times", "normal").text(subject, 123, 17).setTextColor(150);

        let transferDate = document.getElementById("transferDate");
        doc.fromHTML(transferDate, marginRight, 60);
        let transferDateValue = document.getElementById("transferDateValue").value;
        doc.setFontSize(11).text(transferDateValue, left, 81, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginRight, 75, 75, 9, 1, 1, 'D');

        let price = document.getElementById("price");
        doc.fromHTML(price, marginRight, 90);
        let priceValue = document.getElementById("priceValue").value;
        doc.text(priceValue, left, 116, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginRight, 110, 75, 9, 1, 1, 'D');

        let departmentAdminFees = document.getElementById("departmentAdminFees");
        doc.fromHTML(departmentAdminFees, marginRight, 135);
        let departmentAdminFeesValue = document.getElementById("departmentAdminFeesValue").value;
        doc.text(departmentAdminFeesValue, left, 161, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginRight, 155, 75, 9, 1, 1, 'D');

        let brokerageCommission = document.getElementById("brokerageCommission");
        doc.fromHTML(brokerageCommission, marginRight, 170);
        let brokerageCommissionValue = document.getElementById("brokerageCommissionValue").value;
        doc.text(brokerageCommissionValue, left, 196, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.5).roundedRect(marginRight, 190, 75, 9, 1, 1, 'D');

        let yearlyServiceCharge = document.getElementById("yearlyServiceCharge");
        doc.fromHTML(yearlyServiceCharge, marginRight, 215);
        let yearlyServiceChargeValue = document.getElementById("yearlyServiceChargeValue").value;
        doc.text(yearlyServiceChargeValue, left, 241, 'center').setTextColor(150).setDrawColor(255, 0, 0).roundedRect(marginRight, 235, 75, 9, 1, 1, 'D');

        let applicableReimbursment = document.getElementById("applicableReimbursment");
        doc.fromHTML(applicableReimbursment, marginRight, 250);
        let applicableReimbursmentValue = document.getElementById("applicableReimbursmentValue").value;
        doc.text(applicableReimbursmentValue, left, 276, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginRight, 270, 75, 9, 1, 1, 'D');
        
        
        // FOOTER 1st page
        let footer1 = "1";
        doc.setFontSize(10).text(footer1, pageWidth / 2, pageHeight - 10, 'center').setTextColor(100);

        doc.addPage();

        // left side 2nd page

        let rentDetailsReimbursement = document.getElementById("rentDetailsReimbursement");
        doc.fromHTML(rentDetailsReimbursement, marginLeft, 10);

        let contractStartDate = document.getElementById("contractStartDate");
        doc.fromHTML(contractStartDate, marginLeft, 25);
        let contractStartDateValue = document.getElementById("contractStartDateValue").value;
        doc.text(contractStartDateValue, right, 46, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginLeft, 40, 75, 9, 1, 1, 'D');

        let numberofCheques = document.getElementById("numberofCheques");
        doc.fromHTML(numberofCheques, marginLeft, 55);
        let numberofChequesValue = document.getElementById("numberofChequesValue").value;
        doc.text(numberofChequesValue, right, 76, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginLeft, 70, 75, 9, 1, 1, 'D');

        let securityDeposit = document.getElementById("securityDeposit");
        doc.fromHTML(securityDeposit, marginLeft, 85);
        let securityDepositValue = document.getElementById("securityDepositValue").value;
        doc.text(securityDepositValue, right, 111, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.5).roundedRect(marginLeft, 105, 75, 9, 1, 1, 'D');

        // right side 2nd page

        let contractEndDate = document.getElementById("contractEndDate");
        doc.fromHTML(contractEndDate, marginRight, 25);
        let contractEndDateValue = document.getElementById("contractEndDateValue").value;
        doc.text(contractEndDateValue, left, 46, 'center').setTextColor(150).setDrawColor(255, 0, 0).setLineWidth(.3).roundedRect(marginRight, 40, 75, 9, 1, 1, 'D');

        let rentalContract = document.getElementById("rentalContract");
        doc.fromHTML(rentalContract, marginRight, 55);
        let rentalContractValue = document.getElementById("rentalContractValue").value;
        doc.text(rentalContractValue, left, 76, 'center').setTextColor(150).setDrawColor(255, 0, 0).roundedRect(marginRight, 70, 75, 9, 1, 1, 'D');
        
        let rentCollected = document.getElementById("rentCollected");
        doc.fromHTML(rentCollected, marginRight, 85);
        let rentCollectedValue = document.getElementById("rentCollectedValue").value;
        doc.text(rentCollectedValue, left, 111, 'center').setTextColor(150).setDrawColor(255, 0, 0).roundedRect(marginRight, 105, 75, 9, 1, 1, 'D');

        // Full Content
        
        let totalRentAmount = document.getElementById("totalRentAmount");
        doc.fromHTML(totalRentAmount, marginLeft, 120);
        let totalRentAmountValue = document.getElementById("totalRentAmountValue").value;
        doc.text(totalRentAmountValue, pageWidth/2 , 146, 'center').setTextColor(150).setDrawColor(255, 0, 0).roundedRect(marginLeft, 140, 180, 9, 1, 1, 'D');

        let securityDepositReimbursed = document.getElementById("securityDepositReimbursed");
        doc.fromHTML(securityDepositReimbursed, marginLeft, 155);
        let securityDepositReimbursedValue = document.getElementById("securityDepositReimbursedValue").value;
        doc.text(securityDepositReimbursedValue, pageWidth/2 , 181, 'center').setTextColor(150).setDrawColor(255, 0, 0).roundedRect(marginLeft, 175, 180, 9, 1, 1, 'D');
        
        //Notes for calculation

        let notes = document.getElementById("note").value;
        doc.fromHTML(note, marginLeft, 190);
        
        let notesValue = document.getElementById("noteValue").value;
        doc.fromHTML(noteValue, marginLeft, 195);
        
        // FOOTER 2nd page
        let footer2 = "2";
        doc.setFontSize(10).text(footer2, pageWidth / 2, pageHeight - 10, 'center').setTextColor(100);

        doc.save("Sale Fees Calculator.pdf");
    }

}