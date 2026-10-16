Add-Type -AssemblyName System.Drawing

function Generate-CoaImage {
    param (
        [string]$outputPath,
        [string]$sampleName,
        [string]$sampleCode,
        [string]$batchNo,
        [string]$reportCode,
        [string]$servingSizeNote,
        [array]$rows
    )

    $width = 850
    $height = 1150
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    # White background
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.FillRectangle($whiteBrush, 0, 0, $width, $height)

    # Brushes & Pens
    $blackBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(25, 25, 25))
    $grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(70, 70, 70))
    $lightGrayPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(210, 210, 210), 1)
    $dashPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220, 220, 220), 1)
    $dashPen.DashStyle = [System.Drawing.Drawing2D.DashStyle]::Dash
    $blackPen = New-Object System.Drawing.Pen([System.Drawing.Color]::Black, 1.5)
    $thickBlackPen = New-Object System.Drawing.Pen([System.Drawing.Color]::Black, 2)

    # Fonts
    $fontHeader = New-Object System.Drawing.Font("Arial", 9.5, [System.Drawing.FontStyle]::Bold)
    $fontHeaderReg = New-Object System.Drawing.Font("Arial", 9, [System.Drawing.FontStyle]::Regular)
    $fontTitle = New-Object System.Drawing.Font("Times New Roman", 18, [System.Drawing.FontStyle]::Bold)
    $fontMetaLabel = New-Object System.Drawing.Font("Arial", 9, [System.Drawing.FontStyle]::Bold)
    $fontMetaVal = New-Object System.Drawing.Font("Arial", 9, [System.Drawing.FontStyle]::Regular)
    $fontTableHeader = New-Object System.Drawing.Font("Arial", 9, ([System.Drawing.FontStyle]::Bold -bor [System.Drawing.FontStyle]::Italic))
    $fontTableCell = New-Object System.Drawing.Font("Arial", 8.5, [System.Drawing.FontStyle]::Regular)
    $fontTableCellBold = New-Object System.Drawing.Font("Arial", 8.5, [System.Drawing.FontStyle]::Bold)
    $fontSign = New-Object System.Drawing.Font("Arial", 9, [System.Drawing.FontStyle]::Bold)
    $fontSignSub = New-Object System.Drawing.Font("Arial", 8.5, [System.Drawing.FontStyle]::Regular)
    $fontScript = New-Object System.Drawing.Font("Segoe Script", 16, [System.Drawing.FontStyle]::Bold)

    $leftMargin = 50
    $rightMargin = $width - 50
    $curY = 45

    # Top Right: Report Code & Date
    $reportText = "Report Code: $reportCode`nReport Date: 04.21.2026"
    $sfRight = New-Object System.Drawing.StringFormat
    $sfRight.Alignment = [System.Drawing.StringAlignment]::Far
    $g.DrawString($reportText, $fontHeaderReg, $blackBrush, [float]($rightMargin), [float]$curY, $sfRight)

    # Top Left: Company Info
    $companyText = "Noventra LLC`n500 Horizon Drive, Suite 540`nRobbinsville NJ 08691 USA"
    $g.DrawString($companyText, $fontHeader, $blackBrush, [float]$leftMargin, [float]$curY)
    $curY += 75

    # Certificate of Analysis Title
    $titleText = "Certificate of Analysis"
    $sfCenter = New-Object System.Drawing.StringFormat
    $sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($titleText, $fontTitle, $blackBrush, [float]($width / 2), [float]$curY, $sfCenter)
    $curY += 32

    # Under title double line
    $g.DrawLine($thickBlackPen, [float]$leftMargin, [float]$curY, [float]$rightMargin, [float]$curY)
    $g.DrawLine($lightGrayPen, [float]$leftMargin, [float]($curY + 3), [float]$rightMargin, [float]($curY + 3))
    $curY += 12

    # Metadata Grid
    $metaRowHeight = 22
    # Row 1
    $g.DrawString("Sample Code:", $fontMetaLabel, $blackBrush, [float]$leftMargin, [float]$curY)
    $g.DrawString($sampleCode, $fontMetaVal, $blackBrush, [float]($leftMargin + 105), [float]$curY)
    $g.DrawString("Received On:", $fontMetaLabel, $blackBrush, [float]($leftMargin + 400), [float]$curY)
    $g.DrawString("04/16/2026", $fontMetaVal, $blackBrush, [float]($leftMargin + 505), [float]$curY)
    $curY += $metaRowHeight

    # Row 2
    $g.DrawString("Sample Name:", $fontMetaLabel, $blackBrush, [float]$leftMargin, [float]$curY)
    $g.DrawString($sampleName, $fontMetaVal, $blackBrush, [float]($leftMargin + 105), [float]$curY)
    $g.DrawString("Batch No.:", $fontMetaLabel, $blackBrush, [float]($leftMargin + 400), [float]$curY)
    $g.DrawString($batchNo, $fontMetaVal, $blackBrush, [float]($leftMargin + 505), [float]$curY)
    $curY += $metaRowHeight

    # Row 3
    $g.DrawString("P.O. No.:", $fontMetaLabel, $blackBrush, [float]$leftMargin, [float]$curY)
    $g.DrawString("NA", $fontMetaVal, $blackBrush, [float]($leftMargin + 105), [float]$curY)
    $g.DrawString("Test On:", $fontMetaLabel, $blackBrush, [float]($leftMargin + 400), [float]$curY)
    $g.DrawString("04/16/2026", $fontMetaVal, $blackBrush, [float]($leftMargin + 505), [float]$curY)
    $curY += $metaRowHeight + 5

    # Dividing line before table
    $g.DrawLine($blackPen, [float]$leftMargin, [float]$curY, [float]$rightMargin, [float]$curY)
    $curY += 8

    # Table Columns
    $col1X = $leftMargin          # Test (width ~290)
    $col2X = $leftMargin + 295    # Method (width ~110)
    $col3X = $leftMargin + 415    # Claim (width ~175)
    $col4X = $leftMargin + 600    # Result (width ~150)

    # Table Header
    $g.DrawString("Test", $fontTableHeader, $blackBrush, [float]$col1X, [float]$curY)
    $g.DrawString("Method", $fontTableHeader, $blackBrush, [float]$col2X, [float]$curY)
    $g.DrawString("Claim", $fontTableHeader, $blackBrush, [float]$col3X, [float]$curY)
    $g.DrawString("Result", $fontTableHeader, $blackBrush, [float]$col4X, [float]$curY)
    $curY += 20
    $g.DrawLine($blackPen, [float]$leftMargin, [float]$curY, [float]$rightMargin, [float]$curY)
    $curY += 4

    # Table Rows
    foreach ($r in $rows) {
        $testText = $r.Test
        $methodText = $r.Method
        $claimText = $r.Claim
        $resultText = $r.Result

        # Measure testText height in case of wrapping
        $rectTest = New-Object System.Drawing.RectangleF([float]$col1X, [float]$curY, 280, 50)
        $size = $g.MeasureString($testText, $fontTableCell, 280)
        $rowH = [Math]::Max([float]24, [float]($size.Height + 6))

        $g.DrawString($testText, $fontTableCell, $blackBrush, $rectTest)
        $g.DrawString($methodText, $fontTableCell, $blackBrush, [float]$col2X, [float]$curY)
        $g.DrawString($claimText, $fontTableCell, $blackBrush, [float]$col3X, [float]$curY)
        $g.DrawString($resultText, $fontTableCellBold, $blackBrush, [float]$col4X, [float]$curY)

        $curY += $rowH
        $g.DrawLine($dashPen, [float]$leftMargin, [float]$curY, [float]$rightMargin, [float]$curY)
        $curY += 3
    }

    # Bottom solid line
    $curY += 5
    $g.DrawLine($thickBlackPen, [float]$leftMargin, [float]$curY, [float]$rightMargin, [float]$curY)
    $curY += 15

    # Note section
    $g.DrawString("Note:", $fontMetaLabel, $blackBrush, [float]$leftMargin, [float]$curY)
    $curY += 16
    $g.DrawString($servingSizeNote, $fontMetaVal, $blackBrush, [float]$leftMargin, [float]$curY)
    $curY += 32

    # Signature section
    # Simulated signature graphic
    $g.DrawString("Wenjun Wei", $fontScript, [System.Drawing.Brushes]::Navy, [float]$leftMargin, [float]$curY)
    $curY += 38
    $g.DrawLine($blackPen, [float]$leftMargin, [float]$curY, [float]($leftMargin + 200), [float]$curY)
    $curY += 6
    $g.DrawString("Dr. Wenjun Wei", $fontSign, $blackBrush, [float]$leftMargin, [float]$curY)
    $curY += 16
    $g.DrawString("Lab Director", $fontSignSub, $grayBrush, [float]$leftMargin, [float]$curY)

    # Save Bitmap
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Generated COA image at $outputPath"
}

# 1. Glutathione COA Rows (Exact match to uploaded reference)
$glutRows = @(
    @{ Test = "Total Plate Count"; Method = "ISO 4833-1"; Claim = "<10,000,000 cfu/g"; Result = "<10 cfu/g" },
    @{ Test = "Yeast & Mold"; Method = "USP<2021>"; Claim = "<100,000 cfu/g"; Result = "<10 cfu/g" },
    @{ Test = "Escherichia.coli"; Method = "USP<2021>"; Claim = "Absent/10g"; Result = "Absent/10g" },
    @{ Test = "Salmonella"; Method = "USP<2022>"; Claim = "Absent/10g"; Result = "Absent/10g" },
    @{ Test = "Total Arsenic"; Method = "USP<2232>"; Claim = "<15.000 mcg/day"; Result = "0.019 mcg/day" },
    @{ Test = "Cadmium"; Method = "USP<2232>"; Claim = "<5.000 mcg/day"; Result = "0.006 mcg/day" },
    @{ Test = "Lead"; Method = "USP<2232>"; Claim = "<5.000 mcg/day"; Result = "0.048 mcg/day" },
    @{ Test = "Total Mercury"; Method = "USP<2232>"; Claim = "<2.000 mcg/day"; Result = "<0.006 mcg/day" },
    @{ Test = "Vitamin C`n(as Calcium Ascorbate)"; Method = "HPLC"; Claim = "50 mg/S"; Result = "59.5 mg/S" },
    @{ Test = "Riboflavin (as`nRiboflavin-5-Phosphate)"; Method = "HPLC"; Claim = "5 mg/S"; Result = "6.14 mg/S" },
    @{ Test = "Selenium`n(as Selenomethionine)"; Method = "ICP-MS"; Claim = "55 mcg/S"; Result = "63.5 mcg/S" },
    @{ Test = "Liposomal L-Glutathione`nComplex (50% L-Glutathione)"; Method = "HPLC"; Claim = "1000 mg/S"; Result = "1026 mg/S" },
    @{ Test = "Resveratrol`n(from Polygonum cuspidatum Root Extract)"; Method = "HPLC"; Claim = "100 mg/S"; Result = "108 mg/S" }
)

Generate-CoaImage `
    -outputPath "public/coa/noventra-glutathione-coa.png" `
    -sampleName "Noventra Glutathione" `
    -sampleCode "260416C1103" `
    -batchNo "2026-32314N" `
    -reportCode "TR-260421-C11-03" `
    -servingSizeNote "Serving Size (S): 2 Capsules" `
    -rows $glutRows

# 2. Magnesium COA Rows
$magRows = @(
    @{ Test = "Total Plate Count"; Method = "ISO 4833-1"; Claim = "<10,000,000 cfu/g"; Result = "<10 cfu/g" },
    @{ Test = "Yeast & Mold"; Method = "USP<2021>"; Claim = "<100,000 cfu/g"; Result = "<10 cfu/g" },
    @{ Test = "Escherichia.coli"; Method = "USP<2021>"; Claim = "Absent/10g"; Result = "Absent/10g" },
    @{ Test = "Salmonella"; Method = "USP<2022>"; Claim = "Absent/10g"; Result = "Absent/10g" },
    @{ Test = "Total Arsenic"; Method = "USP<2232>"; Claim = "<15.000 mcg/day"; Result = "0.014 mcg/day" },
    @{ Test = "Cadmium"; Method = "USP<2232>"; Claim = "<5.000 mcg/day"; Result = "0.004 mcg/day" },
    @{ Test = "Lead"; Method = "USP<2232>"; Claim = "<5.000 mcg/day"; Result = "0.022 mcg/day" },
    @{ Test = "Total Mercury"; Method = "USP<2232>"; Claim = "<2.000 mcg/day"; Result = "<0.005 mcg/day" },
    @{ Test = "Magnesium`n(as Magnesium Bisglycinate Chelate)"; Method = "ICP-OES"; Claim = "120 mg/S"; Result = "124.5 mg/S" },
    @{ Test = "Compound Identity Confirmation`n(Bisglycinate Chelate)"; Method = "FTIR"; Claim = "Conforms"; Result = "Conforms" },
    @{ Test = "Average Capsule Fill Weight"; Method = "USP<2091>"; Claim = "650 mg/S +/- 5%"; Result = "653.2 mg/S" },
    @{ Test = "Disintegration Time"; Method = "USP<2040>"; Claim = "< 15 min"; Result = "8.5 min" }
)

Generate-CoaImage `
    -outputPath "public/coa/noventra-magnesium-coa.png" `
    -sampleName "Noventra Magnesium Glycinate" `
    -sampleCode "260416M0801" `
    -batchNo "2026-11842M" `
    -reportCode "TR-260421-M08-01" `
    -servingSizeNote "Serving Size (S): 1 Capsule" `
    -rows $magRows
